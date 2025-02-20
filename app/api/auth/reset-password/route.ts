import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json()
    console.log('Password reset request received:', data)
    
    return NextResponse.json({ 
        success: true, 
        message: 'Password reset email sent' 
    })
} 