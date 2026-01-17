import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    APP_URL: z.string().url().optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().optional(),
    // GitHub OAuth (optional - will be replaced with Magic Link)
    GITHUB_ID: z.string().optional(),
    GITHUB_SECRET: z.string().optional(),
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    // Stripe (optional - not used initially)
    STRIPE_SECRET_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET_KEY: z.string().optional(),
    STRIPE_SUBSCRIPTION_PRICE_ID: z.string().optional(),
    // Scaleway Object Storage (optional - required for document features)
    SCW_ACCESS_KEY: z.string().optional(),
    SCW_SECRET_KEY: z.string().optional(),
    SCW_BUCKET: z.string().optional(),
    SCW_REGION: z.string().default("fr-par"),
    SCW_ENDPOINT: z.string().url().default("https://s3.fr-par.scw.cloud"),
    // Scaleway Container Registry (optional - required for CI/CD)
    SCW_REGISTRY: z.string().optional(),
  },
  client: {
    // Stripe (optional - not used initially)
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET_KEY: process.env.STRIPE_WEBHOOK_SECRET_KEY,
    STRIPE_SUBSCRIPTION_PRICE_ID: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    // Scaleway
    SCW_ACCESS_KEY: process.env.SCW_ACCESS_KEY,
    SCW_SECRET_KEY: process.env.SCW_SECRET_KEY,
    SCW_BUCKET: process.env.SCW_BUCKET,
    SCW_REGION: process.env.SCW_REGION,
    SCW_ENDPOINT: process.env.SCW_ENDPOINT,
    SCW_REGISTRY: process.env.SCW_REGISTRY,
  },
  // Skip validation during Docker build (set SKIP_ENV_VALIDATION=true)
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
