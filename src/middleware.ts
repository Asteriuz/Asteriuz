import { NextResponse } from 'next/server';

export function middleware(request: { nextUrl: { pathname: string; }; }) {
  if (request.nextUrl.pathname === '/Curriculo.pdf.txt') {
    return new Response(null, { status: 204 }); // Return a 204 No Content response
  }
  return NextResponse.next();
}
