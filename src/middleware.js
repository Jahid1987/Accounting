import { NextResponse } from "next/server";

export function middleware(req) {
  // const token = req.cookies.get("next-auth.session-token");
  const token = true;
  console.log("this is middleware");
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about", "/blogs/:path*"],
};
