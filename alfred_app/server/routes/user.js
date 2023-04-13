import Express from "express";
import {getUser} from "../controllers/user.js"

const router = Express.Router();

router.get("/user/:id", getUser);

export default router;