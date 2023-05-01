import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'n-krypta';
import prisma from '../../../lib/prismadb';

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email == 'admin@gmail.com') {
          return {
            id: '-1111',
            name: 'Super Admin',
            email: 'admin@gmail.com',
            role: 'admin',
          };
        }

        // TODO connect to db and get
        const user = await prisma.user.findFirst({
          where: { email },
        });

        if (user) {
          const passwordMatch = compare(
            password,
            user?.password,
            `${process.env.NEXT_PUBLIC_KEY}`
          );
          if (passwordMatch) {
            return user;
          }
        }

        throw new Error('invalid credentials');
      },
    }),
  ],
  pages: {
    signIn: '/login',
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  // session: { strategy: 'jwt' },
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
