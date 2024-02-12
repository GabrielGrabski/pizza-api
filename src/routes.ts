import { Request, Response, Router } from "express";
import { UserController } from "./controller/user/UserController";

const router = Router();
const userController = new UserController();

router.post("/users", userController.create);

export default router;
