'use client';
import { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { FormData } from '@/types/auth';

interface RegisterFormProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: Record<string, string>;
    loading: boolean;
    handleRegistration: (formData: FormData) => Promise<any>;
    setActiveForm: (form: 'login' | 'register' | 'reset') => void;
    resetForm: () => void;
}

export function RegisterForm({
    formData,
    handleChange,
    errors,
    loading,
    handleRegistration,
    setActiveForm,
    resetForm,
}: RegisterFormProps) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await handleRegistration(formData);
        if (response.success) {
            resetForm();
            toast.success(response.message || 'Registration successful!');
        } else {
            toast.error(response.message || 'Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" data-oid="csmy1cf">
            <div className="space-y-6" data-oid="xlntluh">
                <div className="group relative" data-oid="4zhsvw4">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                        placeholder=" "
                        data-oid="hjtsasq"
                    />

                    <label
                        htmlFor="username"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        data-oid="-xliomy"
                    >
                        First and last name
                    </label>
                </div>
                {errors.username && (
                    <p className="mt-1 text-sm text-red-600" data-oid="a-gsd8u">
                        {errors.username}
                    </p>
                )}
            </div>

            <div className="space-y-6" data-oid="j8jp0tm">
                <div className="group relative" data-oid="5e:o3lh">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                        placeholder=" "
                        data-oid="h.snh9l"
                    />

                    <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        data-oid="oahic1."
                    >
                        Email address
                    </label>
                </div>
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600" data-oid="pevimwu">
                        {errors.email}
                    </p>
                )}
            </div>

            <div className="space-y-6" data-oid="f7:9fd5">
                <div className="group relative" data-oid="lt6krx3">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                        placeholder=" "
                        data-oid="uaedik5"
                    />

                    <label
                        htmlFor="password"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        data-oid="2zfc8.k"
                    >
                        Password
                    </label>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600" data-oid="dqanvgq">
                        {errors.password}
                    </p>
                )}
            </div>

            <div className="space-y-6" data-oid="wckat_k">
                <div className="group relative" data-oid="3wcbjoh">
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                        placeholder=" "
                        data-oid="bxlqljm"
                    />

                    <label
                        htmlFor="confirmPassword"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        data-oid="p-chlpe"
                    >
                        Confirm password
                    </label>
                </div>
                {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600" data-oid="7ysd:x2">
                        {errors.confirmPassword}
                    </p>
                )}
            </div>

            <div className="flex justify-between items-center mt-8" data-oid="5ua0w5a">
                <button
                    type="button"
                    onClick={() => setActiveForm('login')}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    data-oid="y3bgt2."
                >
                    Sign in instead
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md disabled:opacity-50"
                    data-oid="tq0.y.z"
                >
                    {loading ? 'Creating account...' : 'Create Account'}
                </button>
            </div>
        </form>
    );
}
