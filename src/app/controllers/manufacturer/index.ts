import { Request, Response } from 'express';
import AppDataSource from "../../db";
import Manufacturer from "../../db/entity/manufacturer.entity";

export default class ManufacturerController {


    async registerManufacturer(req : Request, res: Response){
        try{

            const { name, country } = req.body.data;

            const manufactuerRepository = AppDataSource.getRepository(Manufacturer)

            // check if Manufacturer exists
            const manufacturer_details = await manufactuerRepository.findOne({
                where : {
                    manufacturerName : name
                }
            });


            if(manufacturer_details){
                return res.status(409).json({
                    status : 'error',
                    message : 'entry already exists'
                })
            }

            await manufactuerRepository.insert({
                manufacturerName : name,
                country
            });

            return res.status(201).json({
                status : "success",
                message : "Manufacturer registered successfully"
            });


        }catch(e){
            return res.status(500).json({
                status  :  'error',
                message :  'server error, please try after some time' 
            });
        }

    }

    async listAllManufacturers(req: Request, res : Response){
        try{

            const manufactuerRepository = AppDataSource.getRepository(Manufacturer);

            const all_manufacturers = await manufactuerRepository.find();

            return res.status(200).json({
                status : "success",
                manufacturerList : all_manufacturers
            })

        }catch(e){
            return res.status(500).json({
                status  :  'error',
                message :  'server error, please try after some time' 
            });
        }
    }

}