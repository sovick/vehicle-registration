import { Router } from "express";
import VehicleController from "../../controllers/vehicle";

const vehicleControllerObj = new VehicleController();

const vehicleRouter = Router();

vehicleRouter.post('/add-new',vehicleControllerObj.addVehicle);

vehicleRouter.get('/lists',vehicleControllerObj.getAllVehicles);

vehicleRouter.get('/list/:vin',vehicleControllerObj.getVehicle);

vehicleRouter.put('/update/:vin',vehicleControllerObj.updateVehicleDetails);

vehicleRouter.delete('/delete/:vin',vehicleControllerObj.deleteVehicleDetails);

export default vehicleRouter;