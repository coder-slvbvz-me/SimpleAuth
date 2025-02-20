import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json()
    console.log('Login request received:', data)
    
    return NextResponse.json({ 
        success: true, 
        message: 'Login successful',
        token: 'sample-token'
    })
} 