import express from "express";

// controllers contain the logic to process and respond to the requests
import { getUser } from "../controllers/Users"

const router = express.Router();

//--/api/users/:id----------------------------------------------------------------------------------
router.get("/api/users/:id", getUser)

export default router;