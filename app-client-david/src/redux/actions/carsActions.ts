import Swal from 'sweetalert2';
import { BASE_URL_API } from '../../types';

interface PropsList {
    type?: string;
    date?: string;
    time?: string;
    passenger?: number;
}

export const getAllCars = async ({date, time, passenger, type}:PropsList) => {
    try {
        const response = await fetch(
            `${BASE_URL_API}/api/cars?size=8&date=${date}&time=${time}&passenger=${passenger}&type=${type}`
            , {
                // mode: 'no-cors',
                // method: "post",
                // headers: {
                //     "Content-Type": "application/json"
                // },
            });
        const data = await response.json();

        data.data?.cars.length === 0 ? Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No cars available',
            showConfirmButton: false,
            timer: 1500
        }) : Swal.fire({
            position: 'center',
            icon: 'success',
            title: data.data?.cars?.length + ' Cars available',
            showConfirmButton: false,
            timer: 1500
        });

        return data.data?.cars
    } catch (error:any) {
        
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        });
    }
};
