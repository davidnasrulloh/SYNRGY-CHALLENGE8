import { GET_ALL_CARS, CARS_ERROR, CarsState, CarsAction } from "../../types";


const initialState: CarsState = {
  cars: [],
  error: null,
};

const carsReducer = (state: CarsState = initialState, action: CarsAction): CarsState => {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                cars: action.payload,
            };
        case CARS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default carsReducer;
