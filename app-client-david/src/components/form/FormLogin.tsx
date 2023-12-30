import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
// import HeaderCar from "../public/img/HeaderCar.png";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import { loginViaForm } from "../../redux/actions/authActions";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { LOGIN } from "../../types";

const FormLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state:RootState) => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "") {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Please enter your email',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (password === "") {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Password cannot be empty',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (username !== "" && password !== "") {
            
            const result = await loginViaForm({ username, password })
            console.log(result)
            dispatch({
                type: LOGIN,
                payload: result?.data
            })
            
        }
    };

    // belum optimal
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // const token:any = loginWithGoogle(tokenResponse.access_token)
            dispatch({
                type: LOGIN,
                payload: tokenResponse.access_token
            });
        },
        onError: (error) => {
            alert(error);
        },
    });

    return (
        <>
            {!isAuthenticated ? (
                
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                        <form className="" onSubmit={handleSubmit}>
                            <h3 className="text-2xl font-bold mb-4">Log in</h3>
                            <div className="my-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e:any) => setUsername(e.target.value)}
                                required
                                />
                            </div>
                            <div className="my-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                                </label>
                                <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <p className="text-sm text-right">
                                Don't have an Account? <Link to="/register" className="text-blue-500">Sign Up</Link>
                            </p>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
                                Sign in
                            </button>
                        </form>
                        <button
                        type="button"
                        onClick={() => googleLogin()}
                        className="w-full bg-red-500 text-white py-2 mt-2 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-300"
                        >
                        <i className="bi bi-google me-2"></i>Sign in with Google
                        </button>
                        <p className="text-center mt-2 text-sm">
                            <Link to="/" className="text-blue-500">Back To Home</Link>
                        </p>
                    </div>
                </div>
                
            ) : (
                navigate('/')
            )}
        </>
    );
};

export default FormLogin;
