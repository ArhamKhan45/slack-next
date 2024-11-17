"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React from "react";

const AuthSignOutActions = () => {
  const { signOut } = useAuthActions();

  //   signOut fucntion Calls the server to invalidate the server session and deletes the locally stored JWT and refresh token.
  const handleProviderSignOut = () => {
    signOut();
  };

  return <Button onClick={handleProviderSignOut}>Sign out</Button>;
};
export default AuthSignOutActions;
