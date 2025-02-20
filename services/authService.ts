import { FormData, AuthResponse } from '@/types/auth';

export const authService = {
    async register(data: FormData): Promise<AuthResponse> {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return {
                success: false,
                message: 'Registration failed. Please try again.',
            };
        }
    },

    async login(data: FormData): Promise<AuthResponse> {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return {
                success: false,
                message: 'Login failed. Please try again.',
            };
        }
    },

    async resetPassword(email: string): Promise<AuthResponse> {
        try {
            const response = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            return await response.json();
        } catch (error) {
            return {
                success: false,
                message: 'Password reset request failed. Please try again.',
            };
        }
    },
}; 