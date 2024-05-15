import express from 'express';
import { productionsController } from "../controllers/productionsController"

export const router = express();

const production = new productionsController();

router
    .route("/production")
    .post(production.create)
    .get(production.getAll)
    
router.get("/production/:id", production.getOne);
router.post("/production/:id", production.update);
router.delete("/production/:id", production.delete);


export default router;