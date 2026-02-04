import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

const isProd = process.env.NODE_ENV === "production";
const domain = "ai-experts.co.il";

export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            checks: ['none']
        }),
    ],
    debug: true,
    trustHost: true,
    cookies: {
        sessionToken: {
            name: `__session`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: true,
            },
        },
    },
    pages: {
        signIn: "/login",
        error: "/api/auth/error",
    },
    callbacks: {
        async session({ session, token }: any) {
            if (session.user && token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
                token.role = (user as any).role || "USER";
            }
            return token;
        }
    },
    session: { strategy: "jwt" }
} satisfies NextAuthConfig
