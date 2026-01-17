"use server";

import { env } from "@/env.mjs";
import { auth } from "@/lib/auth";
import { stripeServer } from "@/lib/stripe";

/**
 * ActionResult type for Server Actions (per project-context.md)
 */
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

type CheckoutSessionData = {
  id: string;
  url: string | null;
};

/**
 * Create a Stripe checkout session for subscription
 * @returns ActionResult with checkout session data
 */
export const create_checkout_session_action = async (): Promise<
  ActionResult<CheckoutSessionData>
> => {
  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      error: { code: "NOT_AUTHENTICATED", message: "User not authenticated" },
    };
  }

  try {
    const checkoutSession = await stripeServer.checkout.sessions.create({
      mode: "subscription",
      customer: session.user.stripeCustomerId,
      line_items: [
        {
          price: env.STRIPE_SUBSCRIPTION_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${env.APP_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: env.APP_URL,
    });

    return {
      success: true,
      data: { id: checkoutSession.id, url: checkoutSession.url },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "CHECKOUT_FAILED",
        message:
          error instanceof Error ? error.message : "Failed to create checkout",
      },
    };
  }
};
