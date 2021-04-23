import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import seguimientoRoutes from './routes/seguimiento.routes'



const app: Application = express();

// settings
app.set('port', 3000 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes

app.use('/seguimiento', seguimientoRoutes);

export default app;