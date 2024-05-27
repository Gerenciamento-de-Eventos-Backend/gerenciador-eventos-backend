import { Request, Response, NextFunction } from "express";

import { ProductionSchema, ProductionInfer } from "../models/constructors/schemas/ProductionSchema";
import { userSchema } from "../models/constructors/schemas/userSchema";

export const validateProductionCreate =  async (req: Request, res: Response, next:NextFunction) => {
    const productionData = req.body
 
    const validation = ProductionSchema.safeParse(productionData);
        
    if (!validation.success) {
        //validation.error.issues
        const errorMessages = validation.error.issues.map(issue => issue.message);
         return res.status(400).send(errorMessages);
    }
    next()
    //     if (validation.success) {
//         const production: ProductionInfer = validation.data;
//         next()
//         } else {
//             console.error("Erro de validação:", validation.error.errors);
//         }
// }

}

export const validateUserCreate = async (req: Request, res: Response, next: NextFunction) => {
    const userData = req.body;
    const validation = userSchema.safeParse(userData);

    if(!validation.success) {
        const errorMessage = validation.error.issues.map(issue => issue.message);
        return res.status(400).send(errorMessage)
    }
    next();
}