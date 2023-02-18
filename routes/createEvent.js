import express from "express"
import {addDetails} from "../controllers/createEvent.js"

const router = express.Router();


router.put("/addDetails",addDetails);

export default router;
