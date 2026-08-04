import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    // Allow the login and auth API routes to proceed without fetching the session
    if (
        request.nextUrl.pathname === "/admin/login" ||
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname.startsWith("/api/auth")
    ) {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session || session.user.role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
