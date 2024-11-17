import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { ChangeEvent, useState } from "react";
import { SignUpCardProps } from "@/types/auth/AuthScreen";
import { useAuthActions } from "@convex-dev/auth/react";
import { onPasswordSignUp } from "../actions/AuthPassword";

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState<boolean>(false);
  const [localError, setLocalError] = useState<string>("");

  const { signIn } = useAuthActions();

  //  on provider for github and google
  const handleProviderSignUp = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(true);
    });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!localError && (
        <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-5">
          <TriangleAlert className="size-4" />
          <p>{localError}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form
          className="space-y-2.5"
          onSubmit={(e) =>
            onPasswordSignUp(
              e,
              name,
              email,
              password,
              confirmPassword,
              signIn,
              setLocalError,
              setPending
            )
          }
        >
          <Input
            disabled={pending}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
          />
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
          <Input
            disabled={pending}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(e.target.value);
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
            onClick={() => void handleProviderSignUp("google")}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="!size-5 absolute top-3 left-3" />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => void handleProviderSignUp("github")}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub className="!size-5 absolute  top-3 left-3" />
            Continue with Github
          </Button>
        </div>
        <p className="text-muted-foreground text-xs">
          Already have an account?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("signIn")}
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
