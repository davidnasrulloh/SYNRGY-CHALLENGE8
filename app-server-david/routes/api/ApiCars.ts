import { Router } from 'express';
import Auth from '../../middlewares/Auth';
import Upload from "../../middlewares/Upload";
import ControllerCars from '../../controllers/api/ControllerCars';
import Media from "../../config/media";

class ApiCars {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    this.router.get('/', ControllerCars.list); // /api/cars READ

    this.router.get('/:car_id', ControllerCars.show); // /api/cars/1 

    this.router.post('/',
      Media.upload.single('file'),
      Upload.handleUpload,
      Auth.authorizeAdmin,
      ControllerCars.create
    ); // /api/cars CREATE

    this.router.put('/:car_id',
      Media.upload.single('file'),
      Upload.handleUpload,
      Auth.authorizeAdmin,
      ControllerCars.update
    ); // /api/cars/1 -> /api/cars/:car_id UPDATE

    this.router.delete('/:car_id',
      Auth.authorizeAdmin,
      ControllerCars.remove
    ); // /api/cars/1 -> /api/cars/:id DELETE

    return this.router;
  }
}

export default new ApiCars();
