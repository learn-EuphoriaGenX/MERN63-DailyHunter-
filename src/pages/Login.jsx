import React from 'react'

function Login() {
    return (
        <form className="space-y-6 p-40 bg-gray-400">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-all shadow-md"
            >
                Login
            </button>
        </form>
    )
}

export default Login