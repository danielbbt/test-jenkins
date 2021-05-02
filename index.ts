import { Request, Response, Application } from 'express';
const express = require('express');
import { genereateUuid } from './helpers/uuid';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        test: 'test',
        uuid: genereateUuid(),
    });
});

app.listen(port, () => console.log('Server is running on: ', port));