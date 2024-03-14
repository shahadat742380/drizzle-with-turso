import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/schema",
  driver: "turso",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
} satisfies Config;
