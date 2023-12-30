// import dotenv from 'dotenv';
// dotenv.config();

export const GET_ALL_CARS = "GET_ALL_CARS";
export const CARS_ERROR = "CARS_ERROR";
export const SET_CARS = "SET_CARS";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";

export const BASE_URL_API = import.meta.env.VITE_BASE_URL_API
export const SUCCESS_STATUS_API_RESPONSE = 200

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

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: {
      id: string;
      username: string;
      email: string;
      name?: string;
    } | null;
    error: string | null;
}

export type AuthAction =
  | { type: typeof LOGIN; payload: string; user: AuthState['user'] }
  | { type: typeof LOGOUT }
  | { type: typeof AUTH_ERROR; payload: string };

export interface CarsState {
    cars: ICars[];
    error: string | null;
}

export type CarsAction =
  | { type: typeof GET_ALL_CARS; payload: CarsState['cars'] }
  | { type: typeof CARS_ERROR; payload: string };


