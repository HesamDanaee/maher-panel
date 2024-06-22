import { type NextRequest } from "next/server";
import fetcher from "./src/lib/fetcher";
import APIS from "./src/constants/apis";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const authRegex = /^\/(\/.*)?$/;
  const panelRegex = /^\/panel(\/.*)?$/;

  if (request.nextUrl.pathname.match(authRegex)) {
    if (token) {
      const { data } =
        (await fetcher<IsActiveRes, IsActiveRes>(APIS.isActive, "POST")) ?? {};

      if (data.active === 0) {
        return Response.redirect(new URL("/auth/verify", request.url));
      } else {
        return Response.redirect(
          new URL("/panel/dashboard/goods", request.url)
        );
      }
    } else {
      return Response.redirect(new URL("/auth/login", request.url));
    }
  }

  // Redirect to login if not authenticated
  if (request.nextUrl.pathname.match(panelRegex)) {
    if (!token) return Response.redirect(new URL("/auth/login", request.url));
  }
}
