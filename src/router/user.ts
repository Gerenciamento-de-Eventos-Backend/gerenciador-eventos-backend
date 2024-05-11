import express from 'express';
import { userController } from "../controllers/userController"

export const router = express();

const user = new userController();

router
    .route("/users/:id")
    .get(user.getOne)
    .patch(user.update)
    .delete(user.delete);
router
    .route("/users")
    .post(user.create)
    .get(user.getAll);


export default router;