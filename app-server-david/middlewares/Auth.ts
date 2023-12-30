import { Request, Response, NextFunction } from 'express';
import { IUsers } from '../models/Users';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ServiceAuth from '../services/ServiceAuth';

export interface IRequestWithAuth extends Request {
  user?: IUsers | string | JwtPayload | object | any | undefined;
}

export const JWT_KEY = 'RENTAL_CARS_JWT_KEY';

class Auth {
  constructor() { }

  authorize(req: Request, res: Response, next: NextFunction) {
    next();
  }

  async authorizeSuperAdmin(req: IRequestWithAuth, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (!headers.authorization) {
      return res.status(403).json({
        data: 'not authorized',
      });
    }

    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      try {
        const userData:any = await ServiceAuth.validateToken(token);
        const isSuperAdmin = await ServiceAuth.validateRole(userData, 'superadmin');
    
        if (!isSuperAdmin) {
          return res.status(403).json({
            data: 'not authorized',
          });
        }
  
        next();
      } catch (error: any) {
        return res.status(error.status || 500).json({ success: false, message: "An error occurred processing the request. Please try again later", error: error.message, ...error.response });
      }

    } else {
      res.status(401).json({ error: 'Authorization header is missing.' });
    }

    
  }

  async authorizeAdmin(req: IRequestWithAuth, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (!headers.authorization) {
      return res.status(403).json({
        data: 'not authorized',
      });
    }    

    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      try {
        const userData:any = await ServiceAuth.validateToken(token);
        const isAdmin = await ServiceAuth.validateRole(userData, 'admin');
    
        if (!isAdmin) {
          return res.status(403).json({
            data: 'not authorized',
          });
        }
  
        next();
      } catch (error: any) {
        return res.status(error.status || 500).json({ success: false, message: "An error occurred processing the request. Please try again later", error: error.message, ...error.response });
      }

    } else {
      res.status(401).json({ error: 'Authorization header is missing.' });
    }

  }
}

export default new Auth();
