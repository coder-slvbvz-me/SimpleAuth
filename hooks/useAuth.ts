import { useState } from 'react';
import { FormData } from '@/types/auth';
import { authService } from '@/services/authService';

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegistration = async (formData: FormData) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await authService.register(formData);
            if (response.success) {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                }
                return response;
            } else {
                setError(response.message);
                return response;
            }
        } catch (err) {
            const errorResponse = { success: false, message: 'An unexpected error occurred' };
            setError(errorResponse.message);
            return errorResponse;
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (formData: FormData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await authService.login(formData);
            if (response.success) {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                }
                return response;
            } else {
                setError(response.message);
                return response;
            }
        } catch (err) {
            const errorResponse = { success: false, message: 'An unexpected error occurred' };
            setError(errorResponse.message);
            return errorResponse;
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async (email: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await authService.resetPassword(email);
            if (response.success) {
                return true;
            } else {
                setError(response.message);
                return false;
            }
        } catch (err) {
            setError('An unexpected error occurred');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        handleRegistration,
        handleLogin,
        handlePasswordReset,
    };
}; 