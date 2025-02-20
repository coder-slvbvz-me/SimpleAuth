import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        console.log('Register request received:', data)
        
        return NextResponse.json({ 
            success: true, 
            message: 'Registration successful',
            token: 'sample-token'
        })
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Invalid request' },
            { status: 400 }
        )
    }
}