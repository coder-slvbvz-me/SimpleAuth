import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        console.log('Password reset request received:', data)
        
        return NextResponse.json({ 
            success: true, 
            message: 'Password reset email sent' 
        })
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Invalid request' },
            { status: 400 }
        )
    }
} 