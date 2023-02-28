

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "faisal@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "Faisal Hayat",
          email: "faisal@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  session: { strategy: "jwt" },
  // callbacks: {
  //   jwt(params) {
  //     // update token
  //     if (params.user?.role) {
  //       params.token.role = params.user.role;
  //     }
  //     // return final_token
  //     return params.token;
  //   },
  // },
};

export default NextAuth(authOptions);