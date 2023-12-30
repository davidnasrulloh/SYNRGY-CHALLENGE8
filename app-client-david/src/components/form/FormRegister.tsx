import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { loginWithGoogle } from "../../redux/actions/authActions"; 
import Swal from 'sweetalert2';
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { REGISTER } from "../../types";

const FormRegister = () => {
    const { isAuthenticated, error } = useSelector((state:RootState) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "") {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Please enter your email',
                showConfirmButton: false,
                timer: 1000
            });
        }
        else if (password === "") {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please enter your password',
                showConfirmButton: false,
                timer: 1000
            });
        }
        else if (username === "") {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please enter your username',
                showConfirmButton: false,
                timer: 1000
            });
        }
        else {
            // const result = registerViaForm({ username, email, password })
            dispatch({
                type: REGISTER,
                payload: '',
            });

            window.location.href = "/login";
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            loginWithGoogle(tokenResponse.access_token)
        },
        onError: (error) => {
            alert(error);
        },
    });

    return (
        <>
            {!isAuthenticated ? (

            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
                <h3 className="text-2xl font-bold mb-6">Register</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e:any) => setUsername(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    </div>
                    <p className="text-sm text-right">
                    Have an Account? <Link to="/login" className="text-blue-500">Sign In</Link>
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
                        Sign up
                    </button>
                    <button
                    type="button"
                    onClick={() => googleLogin()}
                    className="w-full bg-red-500 text-white py-2 mt-2 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-300"
                    >
                    <i className="bi bi-google me-2"></i>Sign In with Google
                    </button>
                    <p className="text-center mt-2 text-sm">
                    <Link to="/" className="text-blue-500">Back To Home</Link>
                    </p>
                </form>
                </div>
            </div>

            ) : (
                navigate('/')
            )}
        </>
    );
};

export default FormRegister;
