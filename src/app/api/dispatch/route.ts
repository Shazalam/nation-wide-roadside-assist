import { NextRequest, NextResponse } from 'next/server';
import { DispatchService } from '@/services/dispatch.service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const dispatch = await DispatchService.createRequest(body);
    
    return NextResponse.json({
      success: true,
      message: 'Dispatch request initialized successfully',
      data: dispatch,
    }, { status: 201 });

  } catch (error: any) {
    console.error('Dispatch API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: error.message.includes('exists') ? 400 : 500 }
    );
  }
}
