import Users, { IUsers } from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import RepositoryAuth from "../repositories/RepositoryAuth";
import { JWT_KEY } from '../middlewares/Auth';

export type TLoginPayload = {
    username: string;
    password: string;
};

class ServiceAuth {
    constructor() { }

    async login(payload: TLoginPayload) {
        try {
            const user = await RepositoryAuth.findUser(payload.username) as unknown as IUsers;

            if (!user) {
                return {
                    success: false,
                    data: 'User tidak ditemukan',
                };
            }

            const validatePassword = bcrypt.compareSync(
                payload.password,
                user.password
            );

            if (!validatePassword) {
                return {
                    success: false,
                    data: 'Username dan Password Anda Salah',
                };
            }

            return {
                success: true,
                data: user,
            };
        } catch (error) {
            throw error;
        }
        
    }

    async register(bodyForm: any) {
        try {
            const create = await RepositoryAuth.create(bodyForm);
            return create;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id: string) {
        const user = await Users.query().findById(id);
        return user;
    }

    async getAllUser() {
        const user = await Users.query();
        return user;
    }

    generateToken(user: IUsers) {
        const token = jwt.sign({ ...user }, JWT_KEY);
        return token;
    }

    async validateToken(token: string): Promise<IUsers | undefined> {
        try {
            const decoded:any = jwt.verify(`${token}`, JWT_KEY, function(err, decoded) {
                if(err){
                    console.log('error', err)
                } else{
                    // console.log('hasil',decoded)
                    return decoded
                }
            })
            return decoded
        } catch (error) {
            console.error('Invalid token:', error);
            // throw new Error('Invalid token');
        }
    }
    
    async validateRole(user: IUsers, role: string) {
        return user.role === role;
    }
}

export default new ServiceAuth();
