import { Request, Response } from 'express';
import ServiceAuth, { TLoginPayload } from '../../services/ServiceAuth';
import { IUsers } from '../../models/Users';
import bcrypt from "bcrypt";
import { IRequestWithAuth } from '../../middlewares/Auth';


class ControllerAuth {
    constructor() { }
    async login(req: Request, res: Response) {
        const payload: TLoginPayload = {
            username: req.body.username,
            password: req.body.password,
        };
        try {
            const response = await ServiceAuth.login(payload);
            if (!response.success) {
                return res.status(403).json({
                    data: response.data,
                });
            }
            const dataUser = response.data as IUsers
            const token = ServiceAuth.generateToken(response.data as IUsers);
            // console.log(dataUser, token)

            res.status(200).json({
                data: token,
                user: {
                    username: payload.username,
                    email: dataUser.email,
                    role: dataUser.role,
                }
            });
        } catch (error) {
            res.status(500).json({
                data: error,
            });
        }
    }

    async registerAdmin(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;
            const bcryptPassword = await bcrypt.hash(password, 5);
            await ServiceAuth.register({
                username: username,
                email: email,
                password: bcryptPassword,
                role: 'admin',
            });
            res.status(201).json({
                message: 'Success Register Admin',
            });
        } catch (error) {
            res.status(500).json({
                error : error,
                message: 'Failed Register Admin',
            });
        }
    }

    async getAllUsers(req: IRequestWithAuth, res: Response) {
        try {
            // Extract user details from the request, assuming it's stored during authentication
            //   const user = req.user as IUsers;
            const user = await ServiceAuth.getAllUser()

            res.status(200).json({
                data: user,
            });
        } catch (error) {
          res.status(500).json({
            data: error,
          });
        }
      }


}

export default new ControllerAuth();
