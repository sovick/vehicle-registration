import "dotenv/config";

export const PORT : number              = Number(process.env.PORT) as number;
export const DB_HOST : string           = process.env.DBHOST as string;
export const DB_USERNAME : string       = process.env.DBUSERNAME as string;
export const DB_PASSWORD : string       = process.env.DBPASSWORD as string;
export const DB_NAME : string           = process.env.DBNAME as string;
export const DB_PORT : number           = Number(process.env.DBPORT) as number;
