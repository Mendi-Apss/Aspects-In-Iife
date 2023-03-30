import express, { Express, Request, Response } from 'express';
const app: Express = express();
const PORT = 8080;


app.get('/', (req, res) => {

});


app.listen(PORT, () => console.log(`listen to port ${PORT}`));