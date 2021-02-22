import { RequestHandler, Request, Response } from "express";
import User, { IUser } from "../models/User";
import { encryptPassword } from "../util/Auth"
import jwt from "jsonwebtoken";

//--/api/auth/login---------------------------------------------------------------------------------
export const login: RequestHandler = async (request: Request, response: Response) =>
{

}

//--/api/auth/logout--------------------------------------------------------------------------------
export const logout: RequestHandler = (request: Request, response: Response) =>
{

}

//--/api/auth/register------------------------------------------------------------------------------
export const register: RequestHandler = async (request: Request, response: Response) =>
{
	try 
	{
		const createUserCallback = (request: Request, response: Response) =>
		{
			const newUser = new User({
				firstname: request.body.firstname,
				lastname: request.body.lastname,
				email: request.body.email,
				username: request.body.username,
				passhash: encryptedPassword
			})
		
			User.create(newUser)
				.then(
					(u: IUser) => 
					{
						response.json(u);
					}
				)
				.catch(
					(err: Error) =>
					{
						response.json(err);
					}
				)
		}
		
		console.log("BEFORE: " + request.body.password);
		let encryptedPassword = await encryptPassword(request, response, createUserCallback);
		console.log("AFTER: " + encryptedPassword);
		
		
	}
	catch (err)
	{
		response.json(err);
	}
}