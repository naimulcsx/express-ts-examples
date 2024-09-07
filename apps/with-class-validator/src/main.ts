import express from 'express';
import authRouter from './modules/auth/auth-routes';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

const port = process.env.PORT || 3333;
const server = app.listen(3333, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
