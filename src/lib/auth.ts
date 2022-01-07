import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';
import { nanoid } from 'nanoid';
import { __jwt__ } from '@/constants';
import { jsonResponse } from './helpers';

export async function getUserJWT(request: NextRequest) {
  return request.cookies[__jwt__.name];
}

export async function createJWT() {
  return await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(__jwt__.secret));
}

export function setUserCookie(token: string, response: NextResponse) {
  response.cookie(__jwt__.name, token, { httpOnly: true });
  return response;
}

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies[__jwt__.name];

  if (!token) {
    return jsonResponse(401, { error: { message: 'Missing jwt token' } });
  }

  try {
    const verifiedJwt = await jwtVerify(token, new TextEncoder().encode(__jwt__.secret));
    return verifiedJwt.payload;
  } catch (err) {
    return jsonResponse(401, { error: { message: 'Your token has expired' } });
  }
}
