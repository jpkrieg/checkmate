import express from "express";

// controllers contain the logic to process and respond to the requests
import { root } from "../controllers/Index";


const router = express.Router();

router.get("/", root);

export default router;