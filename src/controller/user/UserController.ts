import { Request, Response } from "express";
import { UserService } from "../../service/user/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    const service = new UserService();
    const user = await service.create(req.body);
    return res.json(user);
  }
}
