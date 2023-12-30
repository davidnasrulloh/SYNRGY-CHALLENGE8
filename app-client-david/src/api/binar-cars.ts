import axios from 'axios';
import { BASE_URL_API } from '../types'; 

const useCarsFetch = () => {
  const accessToken = localStorage.getItem('token');

  const munio = axios.create({
    baseURL: BASE_URL_API,
  });

  munio.interceptors.request.use(
    (config:any) => {
      if (accessToken) {
        localStorage.removeItem('error_count');
        localStorage.removeItem('last_error_time');
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    }
  );

  munio.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response || ![400].includes(error.response.status)) {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return munio;
};

export default useCarsFetch;
