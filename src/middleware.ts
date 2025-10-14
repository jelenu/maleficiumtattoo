import { intlayerMiddleware } from "next-intlayer/middleware";
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

  // Redirigir raíz a locale por defecto (alemán) si se accede exactamente a "/"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/de"; // defaultLocale configurado como Alemán
    return NextResponse.redirect(url);
  }

  // Delega en intlayer para manejar locales en el resto de rutas
  return intlayerMiddleware(req);
}

// Matcher amplio: todo, delegando la exclusión al código
export const config = {
  matcher: ["/:path*"],
};