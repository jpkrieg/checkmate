import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const encryptPassword = async (request: Request, response: Response, callback: (request: any, response: any) => void) =>
{
	return await bcrypt.hash(request.body.password, 10,
		(err: Error, encrypted: string) =>
		{
			if (err)
			{
				console.log(err);
				throw err;
			}
			else{
				callback(request, response);
			}
		}
	)
} 