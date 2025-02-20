'use client';
import { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { FormData } from '@/types/auth';

interface ResetPasswordFormProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    handlePasswordReset: (email: string) => Promise<boolean>;
    setActiveForm: (form: 'login' | 'register' | 'reset') => void;
    resetForm: () => void;
}

export function ResetPasswordForm({
    formData,
    handleChange,
    loading,
    handlePasswordReset,
    setActiveForm,
    resetForm,
}: ResetPasswordFormProps) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const success = await handlePasswordReset(formData.email);
        if (success) {
            resetForm();
            toast.success('Password reset instructions sent to your email!');
        } else {
            toast.error('Failed to send reset instructions');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" data-oid="af.np1s">
            <div className="group relative" data-oid="2mre0tb">
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 pt-5 pb-2 text-base text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 peer"
                    placeholder=" "
                    data-oid="rbtbwk1"
                />

                <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    data-oid="phvbdwp"
                >
                    Email address
                </label>
            </div>

            <div className="flex justify-between items-center mt-8" data-oid="em.i::r">
                <button
                    type="button"
                    onClick={() => setActiveForm('login')}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    data-oid="oil.92n"
                >
                    Back to sign in
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md disabled:opacity-50"
                    data-oid="dqjskb0"
                >
                    {loading ? 'Sending...' : 'Reset Password'}
                </button>
            </div>
        </form>
    );
}
