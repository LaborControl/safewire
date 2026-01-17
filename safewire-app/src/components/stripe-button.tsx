"use client";

import { create_checkout_session_action } from "@/actions/create-checkout-session";
import { Button } from "@/components/ui/button";

export const StripeButton = () => {
  const handleCreateCheckoutSession = async () => {
    const result = await create_checkout_session_action();

    if (result.success && result.data.url) {
      window.location.href = result.data.url;
    }
  };

  return (
    <Button
      onClick={handleCreateCheckoutSession}
      className="text-foreground cursor-pointer bg-gradient-to-r from-rose-700 to-pink-600"
      size="lg"
    >
      Upgrade to PRO
    </Button>
  );
};
