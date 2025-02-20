'use client';
import { useState } from 'react';
import { FormData } from '@/types/auth';

export const useFormData = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return { formData, handleChange, resetForm };
};