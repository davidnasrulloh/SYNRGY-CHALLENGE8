import { Knex } from 'knex';
import carsData from '../data/cars-data.json';

export async function seed(knex: Knex): Promise<void> {
  await knex('cars').del();

  await knex('cars').insert(carsData.map(car => ({
    name: car.name,
    price: car.price,
    picture: car.picture,
    plate: car.plate,
    manufacture: car.manufacture,
    model: car.model,
    ret_per_pay: car.ret_per_pay,
    capacity: car.capacity,
    description: car.description,
    transmission: car.transmission,
    type: car.type,
    year: car.year,
    options: JSON.stringify(car.options),
    specs: JSON.stringify(car.specs),
    available_at: car.available_at,
    created_by: car.created_by,
    updated_by: car.updated_by,
  })));
}
