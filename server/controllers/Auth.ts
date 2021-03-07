import { RequestHandler, Request, Response } from "express";
import User, { IUser } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// populate process.env
import * as dotenv from "dotenv"
dotenv.config()

const saltRounds = 10;

//--/api/auth/login---------------------------------------------------------------------------------
export const login: RequestHandler = async (request: Request, response: Response) =>
{
	User.findOne({ username: request.body.username})
	.then((u: IUser|null) => { 
		if (!u) return response.status(400).json({ msg: "USER NOT FOUND"});

		// check password
		bcrypt.compare(request.body.password, u.passhash, 
			(err: Error, same: boolean) =>
			{
				if (!same) return response.json({ msg: "INCORRECT PASSWORD"});

				// send response with authentication token
				jwt.sign(
					{username: u.username},
					process.env.jwtSecret as jwt.Secret,
					{ expiresIn: 3600 },
					(err: Error|null, token: string|undefined) => {
						if (err) throw err;
						response.json({ token, u }).redirect("/");
					}
				)
			}	
		)
	 })
	.catch((err) => { response.json(err); })
}

//--/api/auth/logout--------------------------------------------------------------------------------
export const logout: RequestHandler = (request: Request, response: Response) =>
{

}

//--/api/auth/register------------------------------------------------------------------------------
/**
 * register a new user
 * @param request express request
 * @param response express response
 */
export const register: RequestHandler = async (request: Request, response: Response) =>
{
	bcrypt.hash(
		request.body.password,
		saltRounds,
		(err: Error, encryptedPassword: string) => {
			if (err) return response.json(err);

			const newUser = new User({
				firstname: request.body.firstname,
				lastname: request.body.lastname,
				email: request.body.email,
				username: request.body.username,
				passhash: encryptedPassword
			});

			User.create(newUser)
			.then(
				(u: IUser) => 
				{
					// send response with authentication token
					jwt.sign(
						{username: u.username},
						process.env.jwtSecret as jwt.Secret,
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							response.json({
								token,
								u
							});
						}
					)
				}
			).catch(
				(err: Error) =>
				{
					response.json(err);
				}
			)
		}
	)
}