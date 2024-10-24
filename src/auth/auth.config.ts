import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const authOptions: NextAuthConfig = {
  providers: [GoogleProvider, GitHubProvider],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    verifyRequest: "/login",
  },
};

const { auth, handlers, signIn, signOut } = NextAuth(authOptions);

export { auth, handlers, signIn, signOut };
