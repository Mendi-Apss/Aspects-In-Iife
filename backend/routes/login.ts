import express from 'express';
import 'jsonwebtoken';
import { createToken } from '../middleware/auth';

const router = express.Router();

router.get('/', (request, response) => {
    response.cookie('token', createToken('token'), { secure: false });
    response.send({ status: 200, token: request.cookies.token });
});

router.post('/', (request, response) => {

});

router.put('/', (request, response) => {

});

router.delete('/', (request, response) => {

});

module.exports = router;
