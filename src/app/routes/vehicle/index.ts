import { Router } from "express";
import VehicleController from "../../controllers/vehicle";

const vehicleControllerObj = new VehicleController();

const vehicleRouter = Router();

vehicleRouter.post('/add-new',vehicleControllerObj.addVehicle);

vehicleRouter.get('/lists',vehicleControllerObj.getAllVehicles);

vehicleRouter.get('/list/:vin',vehicleControllerObj.getVehicle);

export default vehicleRouter;