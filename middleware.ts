import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { HttpResponse } from "./app/(api)/utils/httpResponse";
import { getToken } from "next-auth/jwt";
import { Token } from "./app/(api)/types/token";

const httpResponse = new HttpResponse();
const secret = process.env.NEXTAUTH_SECRET || "your-secret-key"; //Se cambia luego, es de prueba por ahora

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req, secret })) as Token;
  if (!token) {
    return httpResponse.Unauthorized("Necesita un token de autorización");
  }
  const currentTime = Math.floor(Date.now() / 1000);

  if (token.exp && token.exp < currentTime) {
    return httpResponse.Unauthorized("El token ha expirado");
  }
  console.log(token.exp);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/card/:path*", "/api/transaction/:path*", "/api/user/:path*"],
};
