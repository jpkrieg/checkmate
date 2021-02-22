import { RequestHandler, Request, Response } from "express";

//--/api/users/:id----------------------------------------------------------------------------------
export const root: RequestHandler = (request: Request, response: Response) =>
{
	response.send({response: "I am alive"}).status(200);
}