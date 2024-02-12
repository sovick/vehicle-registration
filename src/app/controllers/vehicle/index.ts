import { Request, Response } from "express";
import AppDataSource from "../../db";
import Manufacturer from "../../db/entity/manufacturer.entity";
import vehicleModel from "../../db/entity/vehicleModel";
import vehicleOwner from "../../db/entity/vehicleOwner";
import Vehicle from "../../db/entity/vehicle";


export default class VehicleController {

    async addVehicle(req : Request, res :Response){
        try {


            const { manufacturerName } =  req.body.data;
            const { modelName, year, fuelType } = req.body.data;
            const { firstName, lastName, email, address } = req.body.data;
            const { VIN, color, purchaseDate, purchasePrice } = req.body.data;

            const manufactuerRepository = AppDataSource.getRepository(Manufacturer);
            const vehicleModelRepository = AppDataSource.getRepository(vehicleModel);
            const vehicleOwnerRepository = AppDataSource.getRepository(vehicleOwner);
            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const manufacturerDetails = await manufactuerRepository.findOne({
                where : {
                    manufacturerName 
                }
            });

            const vehicleExists = await vehicleRepository.findOne({
                where : {
                    VIN
                }
            });

            if(!manufacturerDetails){
                return res.status(409).json({
                    status : "error",
                    message : "Manufacturer details does not exists, please add the manufacturer before adding vehicle details"
                });
            }

            if(vehicleExists){
                return res.status(409).json({
                    status : "error",
                    message : "Vehicle details exists with the given VIN number"
                });
            }

            const manufacturerID = manufacturerDetails.id;

            const vehicleModelDetails = await vehicleModelRepository.insert({
                manufacturerID,
                modelName,
                year,
                fuelType
            });

            const vehicleOwnerDetails = await vehicleOwnerRepository.insert({
                firstName,
                lastName,
                email,
                address
            });

            await vehicleRepository.insert({
                modelID : vehicleModelDetails.raw.insertId,
                ownerID : vehicleOwnerDetails.raw.insertId,
                VIN,
                color,
                purchaseDate,
                purchasePrice
            })


            return res.status(200).json({
                status  : "success",
                message : "vehicle details saved successfully"
            });

        } catch (e) {
            return res.status(500).json({
                status : 'error',
                message : 'server error'
            });
            
        }
    }

    async getAllVehicles(req: Request, res: Response){
        try {

            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const allVehicleDetails = await vehicleRepository.find({
                relations : {
                    modelID : true,
                    ownerID : true
                }
            });

            return res.status(200).json({
                status : 'success',
                allVehicleDetails
            })
        
        } catch (e) {
            return res.status(500).json({
                status : "error",
                message : "server error"
            })   
        }
    }

    async getVehicle(req : Request, res : Response){
        try{

            const { vin : VIN } = req.params;

            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const vehicleDetails = await vehicleRepository.findOne({
                where : {
                    VIN 
                },
                relations : {
                    modelID : true,
                    ownerID : true
                }
            });

            if(!vehicleDetails){
                return res.status(404).json({
                    status : "error",
                    message : "entry not found"
                })
            }

            return res.status(200).json({
                status : "success",
                vehicleDetails
            })


        }catch(e){
            return res.status(500).json({
                status : "error",
                message : "server error"
            })  
        }
    }

    async updateVehicleDetails(req : Request, res : Response){

        try {
            
            const { vin : VIN } = req.params;
            const { color, purchaseDate, purchasePrice } = req.body.data;

            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const vehicleData = await vehicleRepository.findOne({
                where : {
                    VIN
                }
            });

            if(!vehicleData){
                return res.status(404).json({
                    status : "error",
                    message : "resource does not exist"
                })
            }

            interface Payload {
                color?: string;
                purchaseDate?:Date,
                purchasePrice?:number
            }

            const updatePayload : Payload = {}

            if(color){
                updatePayload["color"] = color
            }

            if(purchaseDate){
                updatePayload["purchaseDate"] = purchaseDate
            }

            if(purchasePrice){
                updatePayload["purchasePrice"] = purchasePrice
            }

            await vehicleRepository.update({VIN},{
                ...updatePayload
            });


            return res.status(200).json({
                status :  "success",
                message : "details updated successfully"
            });


        } catch (e) {
            return res.status(500).json({
                status : "error",
                message : "server error"
            })  
        }
    }


    async deleteVehicleDetails(req: Request, res :Response){
        try{

            const { vin : VIN } = req.params;

            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const vehicleData = await vehicleRepository.findOne({
                where : {
                    VIN
                }
            });

            if(!vehicleData){
                return res.status(404).json({
                    status : "error",
                    message : "resource does not exist"
                })
            }

            await vehicleRepository.delete({VIN});

            return res.status(200).json({
                status : 'success',
                message : "resource removed successfully"
            });


        }catch(e){
            return res.status(500).json({
                status : "error",
                message : "server error"
            })  

        }
    }


}