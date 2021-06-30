import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    Providers.Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Digite seu e-mail",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = async (credentials) => {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
              {
                identifier: credentials.email,
                password: credentials.password,
              }
            );

            return response.data;
          };

          const userToBeLogged = user(credentials);

          if (userToBeLogged) {
            return userToBeLogged;
          }
        } catch (e) {
          const errorMessage = e.response.data.message;

          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session, token) => {
      session.jwt = token.jwt;
      session.id = token.id;

      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        if (account.provider) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
          );

          const data = response.data;

          token.jwt = data.jwt;
          token.id = data.user.id;
        } else {
          token.id = user.user.id || user.id;
          token.accessToken = user.jwt;
          token.name = user.user.username || user.user.name;
          token.image = user.user.image || user.image || null;
          token.email = user.user.email;
        }
      }

      return Promise.resolve(token);
    },
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
};

export default (req, res) => NextAuth(req, res, options);
