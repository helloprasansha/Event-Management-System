import { auth } from "@/lib/auth";
import { adminAc, userAc } from "better-auth/plugins/admin/access";


const newUser = await auth.api.createUser({
    body: {
        email: process.env.ADMIN_EMAIL || "",
        password: process.env.ADMIN_PASSWORD || "",
        name: "Admin", 
        role: adminAc ? "admin" : "user",
        data: { customField: "customValue" },
    },
});