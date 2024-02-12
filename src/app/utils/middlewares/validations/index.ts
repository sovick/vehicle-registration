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

    validateVehicleRegister(req : Request, res : Response,next : NextFunction){

        try{

            const schema = z.object({
                body : z.object({
                    data : z.object({
                        manufacturerName : z.string(),
                        modelName : z.string(),
                        year : z.number(),
                        fuelType : z.string(),
                        firstName : z.string(),
                        lastName : z.string(),
                        email : z.string().email(),
                        address : z.string(),
                        VIN : z.string(),
                        color : z.string(),
                        purchaseDate : z.string(),
                        purchasePrice : z.number()
                    })
                })
            })

            schema.parse({
                body : req.body
            });

            next();

        }catch(e){
            return res.status(400).json({
                status : 'error',
                message : 'Bad payload'
            })
        }
    }

    validategetVehicle(req : Request, res : Response,next : NextFunction){
        try{

            const schema = z.object({
                params : z.object({
                    vin : z.string()
                })
            })

            schema.parse({
                params : req.params 
            });

            next();

        }catch(e){
            return res.status(400).json({
                status : 'error',
                message : 'Bad payload'
            })
        }

    }

    validateUpdateVehicleDetails(req : Request, res : Response,next : NextFunction){
        try{

            const schema = z.object({
                body : z.object({
                    data : z.object({
                        color : z.string().optional(),
                        purchaseDate : z.string().optional(),
                        purchasePrice : z.number().optional()
                    })
                })
            })

            schema.parse({
                body : req.body
            });

            next();

        }catch(e){
            return res.status(400).json({
                status : 'error',
                message : 'Bad payload'
            })
        }

    }

    validateDeleteVehicle(req : Request, res : Response,next : NextFunction){
        try{

            const schema = z.object({
                params : z.object({
                    vin : z.string()
                })
            })

            schema.parse({
                params : req.params 
            });

            next();

        }catch(e){
            return res.status(400).json({
                status : 'error',
                message : 'Bad payload'
            })
        }

    }


}