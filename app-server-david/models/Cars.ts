import database from '../config/database';
import { Model } from 'objection';

Model.knex(database);

export interface ICars {
  car_id: number;
  name: string;
  price: number;
  picture: string;
  plate: string;
  manufacture: string;
  model: string;
  ret_per_pay: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  year: string;
  options: string[];
  specs: string[];
  available_at: string;
  created_by: number;
  updated_by: number;
}

class Cars extends Model {
  static get tableName() {
      return 'cars';
  }
  static get idColumn() {
      return 'id';
  }
}

export default Cars;
