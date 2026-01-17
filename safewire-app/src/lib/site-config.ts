import { env } from "@/env.mjs";

export const siteConfig = {
  title: "SAFEWIRE",
  description:
    "Plateforme de pilotage de projets IRVE avec Agent IA conversationnel pour la gestion documentaire et budgétaire.",
  keywords: ["IRVE", "IOT", "Antivol", "Gestion de projet", "Agent IA"],
  url: env.APP_URL || "https://app.safewire.fr",
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
