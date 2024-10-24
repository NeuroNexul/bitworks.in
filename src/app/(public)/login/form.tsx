import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/auth/auth.config";

import { RocketIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { errorMessages, signinErrorMessages } from "../../../auth/error";
import { cn } from "@/lib/utils";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

type Props = { callbackUrl?: string; error?: string; verify_request?: string };

export default function Form({ error, callbackUrl, verify_request }: Props) {
  const errorCode = error?.toLowerCase();
  let errorMessage = "";

  if (errorCode) {
    if (errorMessages[errorCode]) {
      errorMessage = errorMessages[errorCode];
    } else if (signinErrorMessages[errorCode]) {
      errorMessage = signinErrorMessages[errorCode];
    } else {
      errorMessage = "An error occurred. Please try again.";
    }
  }

  const action = (provider: string) => async () => {
    "use server";
    try {
      await signIn(provider, {
        redirectTo: callbackUrl ?? "/",
        redirect: true
      });

      // Redirect to the callback URL
      return redirect(callbackUrl ?? "/");
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`/?error=${error.type}`);
      }
      throw error;
    }
  };

  return (
    <div>
      <div>
        {/* Error Message */}
        {errorMessage && (
          <div className="p-2 text-sm text-center bg-red-200 text-red-800 rounded-md">
            {errorMessage}
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-semibold animate-bring-in opacity-0 delay-100">
          Sign in
        </h2>

        {/* Email Field */}
        <div className="min-h-[124px]">
          <form
            action={async (formData) => {
              "use server";
              try {
                await signIn("email", formData);
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect(`/?error=${error.type}`);
                }
                throw error;
              }
            }}
          >
            <p className="mt-2 text-sm animate-bring-in opacity-0 delay-100">
              Sign in with your email address to continue.
            </p>
            <Input
              id="email"
              type="email"
              className={cn(
                "w-full bg-primary text-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0 mt-2",
                "font-medium placeholder-muted-foreground/70 font-jetbrains-mono",
                "animate-bring-in opacity-0 delay-200"
              )}
              placeholder="name@example.com"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className={cn(
                "w-full mt-4 bg-transparent border-muted-foreground/70 hover:bg-muted-foreground/10",
                "animate-bring-in opacity-0 [animation-delay:300ms]"
              )}
              variant="outline"
            >
              <RocketIcon className="w-4 h-4 mr-2" />
              Send Magic Link
            </Button>
          </form>
        </div>

        {/* OR */}
        <div className="flex items-center mt-4">
          <div className="flex-1 border-t border-muted-foreground/70 hover:bg-muted-foreground/10"></div>
          <div className="mx-4 text-sm">OR</div>
          <div className="flex-1 border-t border-muted-foreground/70 hover:bg-muted-foreground/10"></div>
        </div>

        {/* OAuth */}
        <div className="mt-4">
          <form action={action("google")}>
            <Button
              type="submit"
              className={cn(
                "w-full bg-transparent border-muted-foreground/70 hover:bg-muted-foreground/10",
                "animate-bring-in opacity-0 [animation-delay:200ms]"
              )}
              variant="outline"
            >
              <FcGoogle className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
          </form>
        </div>

        {/* OAuth */}
        <div className="mt-4">
          <form action={action("github")}>
            <Button
              type="submit"
              className={cn(
                "w-full bg-transparent border-muted-foreground/70 hover:bg-muted-foreground/10",
                "animate-bring-in opacity-0 [animation-delay:200ms]"
              )}
              variant="outline"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Continue with Github
            </Button>
          </form>
        </div>
      </div>

      <p className="text-center pt-4 text-sm">
        By signing in, you agree to our Terms of Use and Privacy Policy.
      </p>
    </div>
  );
}
