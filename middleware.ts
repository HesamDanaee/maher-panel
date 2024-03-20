import { type NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // if (token && request.nextUrl.pathname.endsWith("/auth/login")) {
  //   return Response.redirect(new URL("/panel/dashboard", request.url));
  // }

  // if (token && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/dashboard", request.url));
  // }

  // if (!token && !request.nextUrl.pathname.startsWith("/login")) {
  //   return Response.redirect(new URL("/login", request.url));
  // }

  return NextResponse.redirect(
    new URL("/panel/dashboard/customers", request.url),
  );
}

export const config = {
  matcher: "/",
};
