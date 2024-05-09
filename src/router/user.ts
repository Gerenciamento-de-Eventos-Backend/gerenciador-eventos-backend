import express from 'express';
import { userController } from "../controllers/userController"

const router = express();

const user = new userController();

router.post('/user', user.create);

export default router;