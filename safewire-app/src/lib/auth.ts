import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";

import { env } from "@/env.mjs";
import { getDb, users } from "@/lib/schema";
import { stripeServer } from "@/lib/stripe";

/**
 * Get adapter - returns DrizzleAdapter at runtime, undefined at build time
 */
function getAdapter(): Adapter | undefined {
  if (process.env.SKIP_ENV_VALIDATION === "true") {
    return undefined;
  }
  return DrizzleAdapter(getDb()) as Adapter;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: getAdapter(),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session;

      session.user.id = user.id;
      session.user.stripeCustomerId = user.stripeCustomerId;
      session.user.isActive = user.isActive;

      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (!user.email || !user.name) return;

      await stripeServer.customers
        .create({
          email: user.email,
          name: user.name,
        })
        .then(async (customer) =>
          getDb()
            .update(users)
            .set({ stripeCustomerId: customer.id })
            .where(eq(users.id, user.id!)),
        );
    },
  },
});
