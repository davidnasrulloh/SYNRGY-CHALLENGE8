import Swal from 'sweetalert2';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store'; // Update the path based on your actual project structure
import { AUTH_ERROR, AuthAction, BASE_URL_API } from '../../types';

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AuthAction>;

const authError = (error: any): AppThunk => (dispatch:any) => {
    dispatch({
      type: AUTH_ERROR,
      payload: error.message,
    });
  
    setTimeout(() => {
      dispatch({
        type: AUTH_ERROR,
        payload: null,
      });
    }, 5000);
};

export const loginViaForm = async (data: any) => {
    console.log('inidata', data);
    try {
        const response = await fetch(`${BASE_URL_API}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        // console.log('result', result);

        if (result.data) {
            // const userInfo = await fetch(`${BASE_URL_API}/api/auth/me`, {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${result.token}`,
            //     },
            // });
            // const user = await userInfo.json();

            // dispatch({
            //     type: LOGIN,
            //     payload: result.data,
            //     user: user,
            // });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
            });

            return result;

        } else {
            authError(result.error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: "Login Failed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        authError(error);
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Email or Password is incorrect',
            showConfirmButton: false,
            timer: 1500
        });
    }
};

export const registerViaForm = async (data: any) => {
    try {
        const response = await fetch(`${BASE_URL_API}/api/auth/register-admin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Registration Successful',
            showConfirmButton: false,
            timer: 1500
        });

        return result

    } catch (error) {
        authError(error);
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Registration Failed',
            showConfirmButton: false,
            timer: 1500
        });
    }
};
  
export const logout = () => {
    Swal.fire({
        position: 'top',
        icon: 'info',
        title: 'Logout Successful',
        showConfirmButton: false,
        timer: 1500
    });
};

export const loginWithGoogle = async (accessToken: string) => {
    try {
        // const data = {
        //     access_token: accessToken,
        // };

        // ini belum dibuatttttt ya masih kira kira aja

        // const response = await fetch(`${BASE_URL_API}/api/auth/google`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });
        // const result = await response.json();

        // ini jika di database ada datanya 
        
        // const userInfo = await fetch(`${BASE_URL_API}/api/auth/me`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${result.token}`,
        //     },
        // });
        // const user = JSON.parse(JSON.stringify(await userInfo.json()));
        
        // result.token
        if (accessToken) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
            });
            // return result;
        } else {
            // authError(result.error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Login Failed',
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        authError(error);
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Login Failed',
            showConfirmButton: false,
            timer: 1500
        });
    }
};