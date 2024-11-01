import NextAuth, {
  DefaultSession,
  NextAuthConfig,
  Session,
  User,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { XataAdapter } from "@auth/xata-adapter";
import { XataClient } from "@/db/xata";

const client = new XataClient();

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: string;
      bio: string;
      is_member: boolean;
      status: string;
      gender: "male" | "female" | "other";
      phone: string;
      socials: {
        name: string;
        url: string;
      }[];
    } & DefaultSession["user"];
  }
}

function generateDefaultProfile(provider: string, profile: any) {
  const newProfile = {} as Session["user"] & User;

  // Basic profile information to be stored in the database
  newProfile.name = profile.name;
  newProfile.email = profile.email;
  newProfile.image = profile.image;
  newProfile.id = provider === "google" ? profile.sub : profile.id;

  // Additional profile information to be stored in the database
  newProfile.role = "user";
  newProfile.bio = "";
  newProfile.is_member = false;
  newProfile.status = "pending";
  newProfile.gender = "other";
  newProfile.phone = "";
  newProfile.socials =
    provider === "github" ? [{ name: "github", url: profile.html_url }] : [];

  return newProfile;
}

const authOptions: NextAuthConfig = {
  adapter: XataAdapter(client),
  providers: [
    GoogleProvider({
      profile(profile) {
        return generateDefaultProfile("google", profile);
      },
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      profile(profile) {
        return generateDefaultProfile("github", profile);
      },
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    verifyRequest: "/login",
  },
  callbacks: {
    session({ session, token, user }) {
      const { role, bio, gender, is_member, phone, socials, status } =
        user as unknown as Session["user"];

      return {
        ...session,
        user: {
          ...session.user,
          role,
          bio,
          gender,
          is_member,
          phone,
          socials,
          status,
        },
      };
    },
  },
};

const { auth, handlers, signIn, signOut } = NextAuth(authOptions);

export { auth, handlers, signIn, signOut };
