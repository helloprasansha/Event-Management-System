import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";

import { db } from "@/db";
import * as authSchema from "@/db/auth-schema";

export const auth = betterAuth({
  baseURL: {
    allowedHosts: ["localhost:*"],
    protocol: "http",
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
