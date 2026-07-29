"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isRegistering = mode === "register";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const result = isRegistering
      ? await authClient.signUp.email({
          name: String(formData.get("name") ?? ""),
          email,
          password,
          callbackURL: "/admin/dashboard",
        })
      : await authClient.signIn.email({
          email,
          password,
          callbackURL: "/admin/dashboard",
        });

    setIsSubmitting(false);

    if (result.error) {
      setError(result.error.message ?? "Something went wrong. Please try again.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-6">
      <section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-medium text-primary">Event Management</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {isRegistering ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isRegistering
              ? "Register to discover and manage events."
              : "Sign in to continue to your events."}
          </p>
        </div>

        <form  method="post" className="space-y-5" onSubmit={handleSubmit}>
          {isRegistering && (
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="h-10 rounded-lg border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
              />
            </label>
          )}

          <label  className="grid gap-2 text-sm font-medium">
            Email address
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="h-10 rounded-lg border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="exampleyuras@gmail.com"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Password
            <input
              required
              minLength={8}                                                                                                                                                                                                                                                                       
              type="password"
              name="password"
              autoComplete={isRegistering ? "new-password" : "current-password"}
              className="h-10 rounded-lg border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="At least 8 characters"
            />
          </label>

          {error && (
            <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          <Button className="w-full" size="lg" disabled={isSubmitting} type="submit">
            {isSubmitting
              ? "Please wait..."
              : isRegistering
                ? "Create account"
                : "Sign in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isRegistering ? "Already have an account?" : "Need an account?"}{" "}
          <Link className="font-medium text-primary hover:underline" href={isRegistering ? "/login" : "/register"}>
            {isRegistering ? "Sign in" : "Register"}
          </Link>
        </p>
      </section>
    </main>
  );
}
