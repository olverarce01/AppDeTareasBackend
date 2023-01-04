import {config as dotenv} from 'dotenv';
dotenv(); //utilizar variables de entorno .env
export const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tasksdb'
};