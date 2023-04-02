import express from 'express';
import StatusCodes from 'http-status-codes';

const router = express.Router();

router.get('/', (request, response) => {
    response
        .status(StatusCodes.OK)
        .send('get request succeeded');

});

router.post('/', (request, response) => {

});

router.put('/', (request, response) => {

});

router.delete('/', (request, response) => {

});

module.exports = router;
