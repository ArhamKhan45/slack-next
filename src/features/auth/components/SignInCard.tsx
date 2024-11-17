import React, { ChangeEvent, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { SignInCardProps } from "@/types/auth/AuthScreen";

const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const { signIn } = useAuthActions();

  //  on provider for github and google
  const handleProviderSignIn = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(true);
    });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={pending}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
          <Input
            disabled={pending}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            required
          />
          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            disabled={pending}
          >
            Continue
          </Button>
        </form>
        <Separator />
        <div className=" flex flex-col gap-y-5">
          <Button
            disabled={pending}
            onClick={() => void handleProviderSignIn("google")}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="!size-5 absolute top-3 left-3" />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => void handleProviderSignIn("github")}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub className="!size-5 absolute  top-3 left-3" />
            Continue with Github
          </Button>
        </div>
        <p className="text-muted-foreground text-xs">
          Don`&apos;t have an account?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("signUp")}
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
