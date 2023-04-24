import express, { Express } from 'express';
import 'jsonwebtoken';
import { basicAuthMiddleware } from './middleware/auth';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app: Express = express();
const PORT = 8080;

const LOGIN_ROUTE = require('./routes/login');
const SIGN_IN_ROUTE = require('./routes/sign-in');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login',LOGIN_ROUTE);
app.use('/', basicAuthMiddleware);
app.use('/sign-in', SIGN_IN_ROUTE);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));