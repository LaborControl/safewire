/**
 * Drizzle ORM Client
 * Re-exports database client and schema from the main schema file
 */
export {
  accounts,
  authenticators,
  db,
  sessions,
  users,
  verificationTokens,
} from "@/lib/schema";
