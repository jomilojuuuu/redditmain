import NextAuth, { NextAuthOptions } from "next-auth"
import RedditProvider from "next-auth/providers/reddit";


const authOptions: NextAuthOptions = {
     providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

};
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
