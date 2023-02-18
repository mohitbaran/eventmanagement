import express from "express"
import {getEvent} from "../controllers/home.js"

const router = express.Router();

router.get("/",getEvent);

export default router;
