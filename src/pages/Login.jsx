import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BACKENDURL from "../config/backend";

function Login({ user, setUser }) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate()


    let handleSubmit = async () => {
        if (!email || !password) {
            console.log("Please fill in all fields", email, password);

            toast.error("Please fill in all fields", {
                position: "top-right", backgroundColor: "red", theme: "colored"
            });
            return;
        }

        try {
            let response = await axios.post(`${BACKENDURL}/api/users/login`, { email, password })
            if (response.data.success) {
                setUser(response.data.data)
                localStorage.setItem('token', response.data.token)
                toast.success(response.data.message, { position: "top-right", backgroundColor: "green", theme: "colored" })
                navigate("/dashboard")
            }
        } catch (error) {
            toast.error(error.response?.data?.message, { position: "top-right", backgroundColor: "red", theme: "colored" })
        }

    }

    if (Object.keys(user).length > 0) {
        return navigate('/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    Login Account
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
                    Fill in the details to login
                </p>

                {/* div */}
                <div className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            name="password"
                            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"

                        />
                    </div>


                    {/* Button */}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 shadow-md"
                    >
                        Log In
                    </button>
                </div>

                {/* Footer */}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-6">
                    Dont have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
