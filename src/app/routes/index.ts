import { Router } from 'express';
import manRouter from './manufacturer';
import vehicleRouter from './vehicle';

const baseRouter : Router = Router();

baseRouter.use('/manufacturer',manRouter);
baseRouter.use('/vehicle',vehicleRouter);

export default baseRouter;