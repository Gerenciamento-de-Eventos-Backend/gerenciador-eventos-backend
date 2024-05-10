import express from 'express';
import { userController } from "../controllers/userController"

export const router = express();

const user = new userController();

router.get("/users/:id", user.getOne);
router
    .route("/users")
    .post(user.create)
    .get(user.getAll);


export default router;