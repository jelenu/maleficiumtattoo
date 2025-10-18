import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware personalizado: evita interceptar recursos estáticos y reservados.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Bypass explícito de paths reservados y assets estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/fonts") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.json" ||
    // Archivos con extensión típica de asset
    /\.(?:css|js|mjs|map|json|txt|png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|otf)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  const supportedLocales = ["de", "en", "es"];

  // Redirigir raíz a locale por defecto (alemán) si se accede exactamente a "/"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/de"; // defaultLocale configurado como Alemán
    return NextResponse.redirect(url);
  }

  // Si YA está prefijado con un locale soportado, continuar
  const isLocalePrefixed = new RegExp(`^/(?:${supportedLocales.join("|")})(?:/|$)`).test(pathname);
  if (isLocalePrefixed) {
    return NextResponse.next();
  }

  // Si NO tiene prefijo de locale, anteponer "/de" preservando el resto del path
  const url = req.nextUrl.clone();
  url.pathname = `/de${pathname}`;
  return NextResponse.redirect(url);
}

// Matcher amplio: todo, delegando la exclusión al código
export const config = {
  matcher: ["/:path*"],
};