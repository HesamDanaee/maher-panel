import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // If user has a valid token and request is coming from the login page redirect him to the panel
  if (token && request.nextUrl.pathname.startsWith("/auth/login")) {
    return Response.redirect(new URL("/panel/dashboard", request.url));
  }

  // if (token && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/dashboard/", request.url));
  // }

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/auth/signup", request.url));
  }

  return NextResponse.redirect(
    new URL("/panel/dashboard/customers", request.url)
  );
}

export const config = {
  matcher: "/",
};
