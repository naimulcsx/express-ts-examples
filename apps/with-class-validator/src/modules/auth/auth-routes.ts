import { Router, Request, Response } from 'express';
import { SignUpDto } from './dto/sign-up.dto';
import { validateBody } from '../common/middlewares/validate-body';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validateBody(SignUpDto),
  (req: Request, res: Response) => {
    const { username, email } = req.body;
    res.json({
      message: 'User Sign-up successful',
      data: { username, email },
    });
  }
);

export default authRouter;
