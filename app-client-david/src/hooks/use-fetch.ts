/* External Modules Import */
import { useState, useEffect, useCallback } from "react";
/* END - External Modules Import */

/* Internal Modules Import */
import { SUCCESS_STATUS_API_RESPONSE } from "../types"; 
import useCarsFetch from "../api/binar-cars";
/* END - Internal Modules Import */

// interface ClientResponse {
//     name?: string;
//     icon?: string;
//     favicon?: string;
//     permissions?: {
//         data?: [] | null
//     };
// }
// interface EventResponse {
//     id?: number
//     name?: string;
// }

interface ApiResponseState {
    meta: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    resError: any; 
    error: boolean;
    loading: boolean;
}

export const UseFetch = (url: string) => {

    const munio = useCarsFetch()

    const accessToken = localStorage.getItem('token') || '';

    const [apiResponse, setApiResponse] = useState<ApiResponseState>({
        meta: [],
        data: [],
        resError: [],
        error: false,
        loading: true,
    });

    const fetchData = useCallback( async () => {

        setApiResponse((prev) => ({ ...prev, loading: true }));

        try {
            const response = await munio.get(`${url}`, {
                headers: {
                    Authorization: accessToken,
                },
            });
        
            const statusResponse = response.status;
        
            if (statusResponse === SUCCESS_STATUS_API_RESPONSE) {
                setApiResponse({
                    error: false,
                    loading: false,
                    resError: '',
                    data: response.data?.data,
                    meta: response.data?.meta,
                });
            }
        } catch (error:any) {
            // console.log(error?.response?.data?.error)
            setApiResponse({
                meta: error,
                data: [],
                resError: error?.response?.data?.error,
                error: true,
                loading: false,
            });
            return;
        }
        
    }, [url, accessToken]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        fetchData();
    }, [fetchData]);  // eslint-disable-line react-hooks/exhaustive-deps

    return { ...apiResponse, fetchData };
}