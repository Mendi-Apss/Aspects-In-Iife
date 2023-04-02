import express, { Express } from 'express';
const app: Express = express();
const PORT = 2121;

const LOGIN_ROUTE = require('./routes/login');
const SIGN_IN_ROUTE = require('./routes/sign-in');

app.use('/login', LOGIN_ROUTE);
app.use('/sign-in',SIGN_IN_ROUTE);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));