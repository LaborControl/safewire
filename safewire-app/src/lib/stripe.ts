import Stripe from "stripe";

import { env } from "@/env.mjs";

/**
 * Check if Stripe is configured
 */
export function isStripeConfigured(): boolean {
  return Boolean(env.STRIPE_SECRET_KEY);
}

/**
 * Lazy-initialized Stripe client
 * Throws error if STRIPE_SECRET_KEY is not configured
 */
function createStripeClient(): Stripe {
  if (!env.STRIPE_SECRET_KEY) {
    throw new Error(
      "Stripe not configured. Set STRIPE_SECRET_KEY environment variable.",
    );
  }
  return new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-09-30.clover",
  });
}

// Lazy initialization - only create client when accessed
let _stripeServer: Stripe | null = null;

export const stripeServer: Stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    if (!_stripeServer) {
      _stripeServer = createStripeClient();
    }
    return _stripeServer[prop as keyof Stripe];
  },
});
