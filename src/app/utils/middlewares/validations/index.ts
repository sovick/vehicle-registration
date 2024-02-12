import { Request, Response, NextFunction } from 'express';
import  { z } from 'zod';

export default class InputValidation {

    validateManufacturer(req : Request, res : Response,next : NextFunction){
        try{

            const manufacturerInputSchema = z.object({
                body : z.object({
                    data : z.object({
                        name : z.string().min(1),
                        country : z.string().min(1)
                    })
                })
            });
        
            manufacturerInputSchema.parse({
                body : req.body
            });
    
            next();
    
        }catch(e){
            return res.status(400).json({
                status : "error",
                message : "bad payload"
            })
        }

    }


}