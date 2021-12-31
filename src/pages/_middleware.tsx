import { NextRequest, NextResponse } from 'next/server';
import { setUserCookie } from '@/lib/auth';

export function middleware(request: NextRequest) {
  return setUserCookie(request, NextResponse.next());
}
