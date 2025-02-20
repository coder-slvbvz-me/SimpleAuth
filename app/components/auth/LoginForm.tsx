'use client';
import { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { FormData } from '@/types/auth';

interface LoginFormProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    handleLogin: (formData: FormData) => Promise<any>;
    setActiveForm: (form: 'login' | 'register' | 'reset') => void;
    resetForm: () => void;
}

export function LoginForm({
    formData,
    handleChange,
    loading,
    handleLogin,
    setActiveForm,
    resetForm,
}: LoginFormProps) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await handleLogin(formData);
        if (response.success) {
            resetForm();
            toast.success(response.message || 'Login successful!');
        } else {
            toast.error(response.message || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" data-oid="ww9b22c">
            <div className="group relative" data-oid="rrm2oc2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                    placeholder=" "
                    data-oid="oq3_3xj"
                />

                <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    data-oid="a0ryb-y"
                >
                    Email address
                </label>
            </div>

            <div className="group relative" data-oid="2izs3jr">
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                    placeholder=" "
                    data-oid="u7875rr"
                />

                <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    data-oid="42_4xf2"
                >
                    Password
                </label>
            </div>

            <div className="flex justify-between items-center mt-8" data-oid="y8d4n0p">
                <div className="space-x-4" data-oid="rrublzd">
                    <button
                        type="button"
                        onClick={() => setActiveForm('register')}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                        data-oid="f1pvwud"
                    >
                        Create account
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveForm('reset')}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                        data-oid="sb3ko5y"
                    >
                        Forgot password?
                    </button>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md disabled:opacity-50"
                    data-oid="pjpv7du"
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </div>
        </form>
    );
}
