import { NextResponse } from "next/server";

export function middleware(request) {
  const themeName = request.cookies.get("themeName")?.value;

  if (!themeName) {
    const response = NextResponse.next();
    response.cookies.set("themeName", "plainwhite", {
      path: "/",
      httpOnly: false,
      sameSite: "strict",
    });

    return response;
  }

  const response = NextResponse.next();
  response.headers.set("themeName", themeName);

  return response;
}

export const config = {
  matcher: "/:path*",
};
