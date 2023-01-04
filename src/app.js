import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swagger from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJSDoc(options)

import tasksRoutes from './routes/tasks';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

app.use(cors()); // que aplicaciones de backend puedan conenctarse
app.use(morgan("dev")); // ver peticiones por consola
app.use(express.json());
app.use(tasksRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app