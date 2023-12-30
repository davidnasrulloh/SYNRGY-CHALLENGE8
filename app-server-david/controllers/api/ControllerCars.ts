import { Request, Response } from 'express';
import { IRestController } from '../../interfaces/IRest';
import ServiceCars from '../../services/ServiceCars';
import ServiceAuth from "../../services/ServiceAuth";
import { IUsers } from '../../models/Users';
import { ICars } from '../../models/Cars';

class ControllerCars implements IRestController {
  constructor() { }

  async list(req: Request, res: Response) {
    try {
      const query = req.query;
      const {date, time, passenger, type} = req.query;
      // console.log(date, time, passenger, type)
      const { data, count } = await ServiceCars.list();

      let filteredData = data;

      if (date) {
          filteredData = filteredData.filter((car:any) => car.available_at.includes(date));
      }

      if (time) {
          filteredData = filteredData.filter((car:any) => car.available_at.includes(time));
      }

      if (passenger) {
          filteredData = filteredData.filter((car:any) => car.capacity >= Number(passenger));
      }

      // sementara type nya di hide karena bukan tipe driver but tipe mobil
      // if (type) {
      //     filteredData = filteredData.filter((car:any) => car.type.toLowerCase() === type.toLowerCase());
      // }

      const totalPages = Math.floor(count / Number(query?.size ?? 10)) + 1;
      
      res.status(200).json({
        status: 'OK',
        data: { cars: filteredData },
        message: 'success fetch books',
        meta: {
          page: 2, // query?.page ? Number(query?.page) : 1
          size: query?.size ? Number(query?.size) : 10,
          total: count,
          totalPages
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'FAIL',
        message: error.message,
      });
    }
  }

  async show(req: Request, res: Response) { 
    try {
      const { car_id } = req.params;
      const car = await ServiceCars.get(parseInt(car_id, 10));
      res.status(200).json({
        status: 'OK',
        data: car,
      });
    } catch (error: any) {
      res.status(422).json({
        status: 'FAIL',
        message: error.message,
      });
    }
  }

  async create(req: Request, res: Response) { 
    try {
      const imgURL: string = (req as any).imgURL;
      const headers = req.headers;
      if (!headers.authorization) {
        return res.status(403).json({
          data: 'not authorized',
        });
      }

      const bearerToken = `${headers.authorization}`;
      const createdBy: IUsers | undefined = await ServiceAuth.validateToken(bearerToken);

      const requestBodyWithImgURL = {
        name : req.body.name,
        price : req.body.price,
        picture : imgURL,
        plate: req.body.plate,
        manufacture: req.body.manufacture,
        model: req.body.model,
        ret_per_pay: req.body.ret_per_pay,
        capacity: req.body.capacity,
        description: req.body.description,
        transmission: req.body.transmission,
        type: req.body.type,
        year: req.body.year,
        options: req.body.options,
        specs: req.body.specs,
        available_at: req.body.available_at,
        created_by: createdBy?.id,
        updated_by: createdBy?.id
      };

      const createdcar = await ServiceCars.create(requestBodyWithImgURL);
      res.status(201).json({
        status: 'OK',
        message : 'Success Create a Car',
        data: createdcar,
      });
    } catch (error) {
      res.status(422).json({
        status: 'FAIL',
        meta : 'Failed Create a Car',
        message: error,
      });
    }
  }

  async remove(req: Request, res: Response) { 
    try {
      const { car_id } = req.params;
      await ServiceCars.delete(parseInt(car_id, 10));
      res.status(200).json({
        status: 'OK',
        message: "Successfully deleted car",
      });
    } catch (error: any) {
      res.status(422).json({
        status: 'FAIL',
        meta : 'Failed Delete a Car',
        message: error.message,
      });
    }
  }

  async update(req: Request, res: Response) { 
    try {
      const imgURL: string = (req as any).imgURL;

      const headers = req.headers;

      if (!headers.authorization) {
        return res.status(403).json({
          data: 'not authorized',
        });
      }
      const bearerToken = `${headers.authorization}`;
      const updatedBy: IUsers | undefined = await ServiceAuth.validateToken(bearerToken);

      const requestBodyWithImgURL = {
        name : req.body.name,
        price : req.body.price,
        picture : imgURL,
        plate: req.body.price,
        manufacture: req.body.price,
        model: req.body.price,
        ret_per_pay: req.body.price,
        capacity: req.body.price,
        description: req.body.price,
        transmission: req.body.transmission,
        type: req.body.type,
        year: req.body.year,
        options: req.body.options,
        specs: req.body.specs,
        available_at: req.body.available_at,
        updated_by: (await updatedBy)?.id
      };

      const { car_id } = req.params;
      const updatedCar = await ServiceCars.update(parseInt(car_id, 10), requestBodyWithImgURL);
      res.status(200).json({
        status: 'OK',
        message : 'Success Update a Car',
        data: updatedCar
      });
    } catch (error) {
      res.status(422).json({
        status: 'FAIL',
        meta : 'Failed Update a Car',
        message: error,
      });
    }
  }
}

export default new ControllerCars();
