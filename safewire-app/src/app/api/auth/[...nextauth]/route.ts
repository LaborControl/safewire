import { handlers } from "@/lib/auth";

// Force dynamic rendering - skip static generation at build time
export const dynamic = "force-dynamic";

export const { GET, POST } = handlers;
