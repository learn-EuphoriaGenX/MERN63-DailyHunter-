import React from 'react'

function Register() {
    return (
        <form className="space-y-6 bg-gray-400 p-40">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="John"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Doe"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
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
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 transition-all shadow-md"
            >
                Register
            </button>
        </form>
    )
}

export default Register