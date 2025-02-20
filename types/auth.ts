export interface FormData {
    username?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
}

export interface ValidationErrors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string;
} 