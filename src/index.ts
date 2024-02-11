// Server Configuration 
import * as env from './app/config';
import AppDataSource from './app/db';
import baseRouter from './app/routes';
import app from './app';


app.use('/api',baseRouter);

// Start the App Server 
app.listen(env.PORT,async ()=>{

    await AppDataSource.initialize();
    
    console.log(`Server running on http://127.0.0.1:${env.PORT}`);
})