import { Router } from 'express';
import ControllerAuth from '../../controllers/api/ControllerAuth';

import MiddlewareAuth from '../../middlewares/Auth';

class ApiAuth {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    this.router.post('/login', ControllerAuth.login);
    /**
    * @openapi
    * '/api/auth/register-admin':
    *  post:
    *     tags:
    *     - Auth - Admin Registration
    *     summary: Register a Admin
    *     requestBody:
    *      required: true
    *      content:
    *        application/json:
    *           schema:
    *              $ref: '#/components/schemas/CreateAdminInput'
    *     responses:
    *      200:
    *        description: Success
    *        content:
    *          application/json:
    *            schema:
    *              $ref: '#/components/schemas/CreateAdminResponse'
    *      409:
    *        description: Conflict
    *      400:
    *        description: Bad request
    */
    this.router.post(
      '/register-admin',
      MiddlewareAuth.authorizeSuperAdmin,
      ControllerAuth.registerAdmin 
    );

    // this.router.get('/user/:id', MiddlewareAuth.authenticateToken, ControllerUsers.getUserById);

    // Get all users route
    this.router.get('/users', MiddlewareAuth.authorizeSuperAdmin, ControllerAuth.getAllUsers);

    return this.router;
  }
}

export default new ApiAuth();
