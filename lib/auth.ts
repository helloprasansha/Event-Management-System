  import { drizzleAdapter } from "@better-auth/drizzle-adapter";
  import { betterAuth } from "better-auth";

  import { db } from "@/db";
  import * as authSchema from "@/db/schema/auth-schema";
  import { admin } from "better-auth/plugins"
import { adminAc, userAc } from "better-auth/plugins/admin/access";

  export const auth = betterAuth({
    baseURL: {
      allowedHosts: ["localhost:*"],
      protocol: "http",
    },
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: authSchema,
    }),
    plugins: [admin(
    {
      defaultRole: "user",
      roles: {
        admin: adminAc,
        user: userAc,
      }
    }
    )],
    emailAndPassword: { 
      enabled: true,
    },
  });
