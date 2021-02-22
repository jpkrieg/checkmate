import express from "express";

// controllers contain the logic to process and respond to the requests
import { login, logout, register } from "../controllers/Auth";

const router = express.Router();

//--/api/users/login--------------------------------------------------------------------------------
router.post("/api/auth/login", login)

//--/api/users/logout-------------------------------------------------------------------------------
router.post("/api/auth/logout", logout)

//--/api/users/register-----------------------------------------------------------------------------
router.post("/api/auth/register", register)

export default router;