'use client';
import { useState } from 'react';
import { FormData, ValidationErrors } from '@/types/auth';

export const useFormValidation = (formData: FormData) => {
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validateForm = (type: 'register' | 'login' | 'reset' = 'register') => {
        const newErrors: ValidationErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (type === 'register') {
            // Username validation
            if (!formData.username) {
                newErrors.username = 'Full name is required';
            } else if (formData.username.length < 2) {
                newErrors.username = 'Name must be at least 2 characters long';
            }

            // Password validation
            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters long';
            }

            // Confirm password validation
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        if (type === 'login' && !formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { errors, validateForm };
}; 