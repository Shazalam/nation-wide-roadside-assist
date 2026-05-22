import { NextRequest, NextResponse } from 'next/server';
import { PartnerService } from '@/services/partner.service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const partner = await PartnerService.createRequest(body);
    
    return NextResponse.json({
      success: true,
      message: 'Partnership request submitted successfully',
      data: partner,
    }, { status: 201 });

  } catch (error: any) {
    console.error('Partner API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: error.message.includes('exists') ? 400 : 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = await PartnerService.getAllRequests();
    return NextResponse.json({
      success: true,
      data: requests,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
