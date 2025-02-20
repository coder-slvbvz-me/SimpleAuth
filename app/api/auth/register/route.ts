import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json()
    console.log('Register request received:', data)
    
    return NextResponse.json({ 
        success: true, 
        message: 'Registration successful',
        token: 'sample-token'
    })
}