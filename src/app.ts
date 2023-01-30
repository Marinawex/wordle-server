import express from 'express';
import cors from 'cors';
import { router } from './routes/wordsEndPoints';
import BodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(BodyParser.json());

app.use('/', router);

export default app;
