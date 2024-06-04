import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) return Response.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/panel/dashboard/:path*", "/register/:path*"],
};
