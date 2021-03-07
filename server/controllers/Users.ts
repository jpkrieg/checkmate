import { RequestHandler, Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

//--/api/users/:id----------------------------------------------------------------------------------
export const getUser: RequestHandler = (request: Request, response: Response) =>
{
	User.findOne({ username: request.params.username })
		.then((u: IUser|null) => {
			response.json(u);
		})
		.catch((err) => {
			console.log(err);
			response.json(err);
		})
}