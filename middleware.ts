import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware (request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("pathname: ", pathname);
  const locales = ["en", "uk"];

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  console.log("hasLocale: ", hasLocale);

  if (hasLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/en${pathname}`;
  console.log("Updated pathname: ", request.nextUrl.pathname);
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
