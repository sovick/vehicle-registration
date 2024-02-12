import ManufacturerController from "../../controllers/manufacturer";
import { Router } from "express";
import InputValidation from '../../utils/middlewares/validations/index';
const manufacturerObj = new ManufacturerController();
const inputValidationObj = new InputValidation();

const manRouter = Router();

manRouter.post('/register',inputValidationObj.validateManufacturer,manufacturerObj.registerManufacturer);

manRouter.get('/list-all',manufacturerObj.listAllManufacturers);

export default manRouter;