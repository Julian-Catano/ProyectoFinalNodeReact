import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const validateJwt = (req: Request, res: Response, next: () => void ) => {
    const token = req.header('token');

    if(!token){
        return res.status(401).json({msg: 'No hay token'});
    }

    try {
        const resultToken: any = jwt.verify(token, process.env.SECRET_KEY || '');
        req.body.id = resultToken?.id;
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Token invalido'});
    }
}

export default validateJwt;



