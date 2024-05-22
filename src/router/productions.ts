import express from 'express';
import { productionsController } from "../controllers/productionsController"
import {validateProductionCreate} from '../middlewares/validate'

export const productionsRouter = express();

const production = new productionsController();

productionsRouter
    .route("/production")
    .post(validateProductionCreate, production.create)
    .get(production.getAll)
    
productionsRouter.get("/production/:id", production.getOne);
productionsRouter.post("/production/:id", production.update);
productionsRouter.delete("/production/:id", production.delete);


export default productionsRouter;