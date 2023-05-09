import * as express from 'express';
import * as cors from 'cors';
import { router } from './routes/wordsEndPoints';
import * as BodyParser from 'body-parser';
import *  as compression  from 'compression';

const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(compression())

app.use('/', router);

export default app;
