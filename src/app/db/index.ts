import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } from '../config';


import Manufacturer from './entity/manufacturer.entity';
import vehicleModel from './entity/vehicleModel';
import vehicleOwner from './entity/vehicleOwner';
import Vehicle from './entity/vehicle';

import { Manufacturer1707660625814 } from './migrations/1707660625814-manufacturer';
import { VehicleModel1707661088779 } from './migrations/1707661088779-vehicleModel';
import { VehicleOwner1707661771703 } from './migrations/1707661771703-vehicleOwner';
import { Vehicle1707662004045 } from './migrations/1707662004045-vehicle';


const AppDataSource : DataSource = new DataSource({
    type        : "mysql",
    host        : DB_HOST,
    port        : DB_PORT,
    username    : DB_USERNAME,
    password    : DB_PASSWORD,
    database    : DB_NAME,
    entities    : [Manufacturer,Vehicle,vehicleModel,vehicleOwner],
    migrations  : [Manufacturer1707660625814,VehicleModel1707661088779, VehicleOwner1707661771703, Vehicle1707662004045],
    logging     : false
});

export default AppDataSource;