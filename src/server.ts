import cors from 'cors';
import express from 'express';
import path from 'path';

import 'dotenv/config';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => console.log('🚀 Server is running on port 3333!'));
