import { Request, Response, Router } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
  throw new Error('Erro ao fazer req')
});

export default router;
