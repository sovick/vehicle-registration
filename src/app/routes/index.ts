import { Router } from 'express';
import manRouter from './manufacturer';

const baseRouter : Router = Router();

baseRouter.use('/manufacturer',manRouter);

export default baseRouter;