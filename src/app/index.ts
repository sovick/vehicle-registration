// App Configuration
import express, { Application} from 'express';
import helmet from 'helmet';

const app : Application = express();

// Add util middlewares
app.disable("x-powered-by")
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

export default app;
