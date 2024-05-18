import express from 'express';
import { productionsController } from "../controllers/productionsController"

export const productionsRouter = express();

const production = new productionsController();

productionsRouter
    .route("/production")
    .post(production.create)
    .get(production.getAll)
    
productionsRouter.get("/production/:id", production.getOne);
productionsRouter.post("/production/:id", production.update);
productionsRouter.delete("/production/:id", production.delete);


export default productionsRouter;