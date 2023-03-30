import express, { Express } from 'express';
const app: Express = express();
const PORT = 2121;

const loginRoute = require('./routes/login');

app.use('/login', loginRoute);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));