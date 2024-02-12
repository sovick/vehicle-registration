import { Router } from "express";
import VehicleController from "../../controllers/vehicle";

const vehicleControllerObj = new VehicleController();

const vehicleRouter = Router();

vehicleRouter.post('/add-new',vehicleControllerObj.addVehicle);

export default vehicleRouter;