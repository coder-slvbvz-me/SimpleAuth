'use client';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormData } from '@/hooks/useFormData';
import { useFormValidation } from '@/hooks/useFormValidation';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ResetPasswordForm } from './components/auth/ResetPasswordForm';

type FormType = 'register' | 'login' | 'reset';

export default function AuthPage() {
    const [activeForm, setActiveForm] = useState<FormType>('register');
    const { formData, handleChange, resetForm } = useFormData();
    const { errors, validateForm } = useFormValidation(formData);
    const { loading, handleRegistration, handleLogin, handlePasswordReset } = useAuth();

    return (
        <>
            <Toaster position="top-center" data-oid="rxx.4.a" />
            <div
                className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200"
                data-oid="trty2iz"
            >
                <div
                    className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
                    data-oid="g30cn:v"
                >
                    <div className="text-center" data-oid="84upvm2">
                        <h2
                            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                            data-oid="4c.uct8"
                        >
                            {activeForm === 'register' && 'Create an Account'}
                            {activeForm === 'login' && 'Welcome Back'}
                            {activeForm === 'reset' && 'Reset Password'}
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400" data-oid="3bp9_59">
                            Hello From Bubble.io
                        </p>
                    </div>

                    {activeForm === 'register' && (
                        <RegisterForm
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors as Record<string, string>}
                            loading={loading}
                            handleRegistration={handleRegistration}
                            setActiveForm={setActiveForm}
                            resetForm={resetForm}
                            data-oid="bz1dfl."
                        />
                    )}

                    {activeForm === 'login' && (
                        <LoginForm
                            formData={formData}
                            handleChange={handleChange}
                            loading={loading}
                            handleLogin={handleLogin}
                            setActiveForm={setActiveForm}
                            resetForm={resetForm}
                            data-oid="mm3q:y6"
                        />
                    )}

                    {activeForm === 'reset' && (
                        <ResetPasswordForm
                            formData={formData}
                            handleChange={handleChange}
                            loading={loading}
                            handlePasswordReset={handlePasswordReset}
                            setActiveForm={setActiveForm}
                            resetForm={resetForm}
                            data-oid="r8qq:5m"
                        />
                    )}
                </div>
            </div>
        </>
    );
}
