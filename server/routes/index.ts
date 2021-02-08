import express from "express";

const router = express.Router();

router.get("/", (request, response) => 
	{
		response.send({ response: "I am alive"}).status(200);
	}
);

export default router;