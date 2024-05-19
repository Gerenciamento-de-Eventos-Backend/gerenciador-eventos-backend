import express from 'express';
import { productionsController } from "../controllers/productionsController"
import {validateProductionCreate} from '../middlewares/validate'

export const productionRouter = express();

const production = new productionsController();

productionRouter
    .route("/production")
    .post(validateProductionCreate, production.create)
    .get(production.getAll)
    
productionRouter.get("/production/:id", production.getOne);
productionRouter.post("/production/:id", production.update);
productionRouter.delete("/production/:id", production.delete);


export default productionRouter;