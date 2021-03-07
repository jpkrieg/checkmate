import express from "express";
import expressjwt from "express-jwt"

// controllers contain the logic to process and respond to the requests
import { getUser } from "../controllers/Users"

// populate process.env
import * as dotenv from "dotenv"
dotenv.config()
const jwtSecret: string = process.env.jwtSecret as string;

const router = express.Router();

//--/api/users/:id----------------------------------------------------------------------------------
router.get("/api/users/:username", expressjwt({ secret: jwtSecret, algorithms: ["HS256"]}), getUser)

export default router;