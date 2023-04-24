import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { isEmpty, isNil } from 'ramda';

const JWT_SECRET = 'ASPECTS-IN-LIFE';


export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (isNil(token)) {
        console.log('if');
        res.redirect('/login');
    } else {
        console.log('else');
        // const verification = jwt.verify(token, JWT_SECRET);
       const l =  res.locals.user = 
        next();
    }

};

export const createToken = (data: any) => {
    return jwt.sign(data, JWT_SECRET);
};