import { Router } from "express";
import VehicleController from "../../controllers/vehicle";
import InputValidation from "../../utils/middlewares/validations";

const vehicleControllerObj = new VehicleController();
const validator = new InputValidation();

const vehicleRouter = Router();

vehicleRouter.post('/add-new',validator.validateVehicleRegister,vehicleControllerObj.addVehicle);

vehicleRouter.get('/lists',vehicleControllerObj.getAllVehicles);

vehicleRouter.get('/list/:vin',validator.validategetVehicle,vehicleControllerObj.getVehicle);

vehicleRouter.put('/update/:vin',validator.validateUpdateVehicleDetails,vehicleControllerObj.updateVehicleDetails);

vehicleRouter.delete('/delete/:vin',validator.validateDeleteVehicle,vehicleControllerObj.deleteVehicleDetails);

export default vehicleRouter;