import ManufacturerController from "../../controllers/manufacturer";
import { Router } from "express";

const manufacturerObj = new ManufacturerController();

const manRouter = Router();

manRouter.post('/register',manufacturerObj.registerManufacturer);

manRouter.get('/list-all',manufacturerObj.listAllManufacturers);

export default manRouter;