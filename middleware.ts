/* Middleware from Next JS
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/users/:id*"],
};
*/

export { default } from "next-auth/middleware";

export const config = {
  matcher: "/dashboard/:path*",
};
