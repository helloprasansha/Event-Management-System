import { auth } from "@/lib/auth";
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set.");
}

const [existingUser] = await db
  .select({ id: user.id })
  .from(user)
  .where(eq(user.email, email.toLowerCase()));

if (existingUser) {
  await db
    .update(user)
    .set({ role: "admin", updatedAt: new Date() })
    .where(eq(user.id, existingUser.id));
  console.log("Existing admin account role verified.");
} else {
  await auth.api.createUser({
    body: {
      email,
      password,
      name: "Admin",
      role: "admin",
    },
  });
  console.log("Admin account created.");
}
