import { Request, Response, NextFunction } from "express";
import { production } from "../models/constructors/productions"
import { ProductionSchema, ProductionInfer } from "../models/constructors/schemas/ProductionSchema"

export const validateProductionCreate =  async (req: Request, res: Response, next:NextFunction) => {
    const productionData = req.body
 
    const validation = ProductionSchema.safeParse(productionData);
    console.log(validation)
        
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