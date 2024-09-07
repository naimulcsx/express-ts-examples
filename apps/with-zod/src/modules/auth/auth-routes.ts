import { Router, Request, Response } from 'express';
import { validateBody } from '../common/middlewares/validate-body';
import { signUpSchema } from './schemas/sign-up.schema';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validateBody(signUpSchema),
  (req: Request, res: Response) => {
    const { username, email } = req.body;
    res.json({
      message: 'User Sign-up successful',
      data: { username, email },
    });
  }
);

export default authRouter;
