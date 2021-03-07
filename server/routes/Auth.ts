import express from "express";
import expressjwt from "express-jwt"

// controllers contain the logic to process and respond to the requests
import { login, logout, register } from "../controllers/Auth";

// populate process.env
import * as dotenv from "dotenv"
dotenv.config()
const jwtSecret: string = process.env.jwtSecret as string;

const router = express.Router();

//--/api/auth/login--------------------------------------------------------------------------------
router.post("/api/auth/login", login)

//--/api/auth/logout-------------------------------------------------------------------------------
router.post("/api/auth/logout", expressjwt({ secret: jwtSecret, algorithms: ["HS256"]}), logout)

//--/api/auth/register-----------------------------------------------------------------------------
router.post("/api/auth/register", expressjwt({ secret: jwtSecret, algorithms: ["HS256"]}), register)

export default router;