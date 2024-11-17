import React from "react";

export const onPasswordSignUp = (
  e: React.FormEvent<HTMLFormElement>,
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  signIn: any,
  setLocalError: React.Dispatch<React.SetStateAction<string>>,
  setPending: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setLocalError("Password do not matched");
    return;
  }
  setPending(true);

  signIn("password", { name, email, password, flow: "signUp" })
    .catch(() => {
      setLocalError("Something went wrong");
    })
    .finally(() => {
      console.log(email, name, password);
      setPending(false);
    });
};

export const onPasswordSignIn = (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  signIn: any,
  setLocalError: React.Dispatch<React.SetStateAction<string>>,
  setPending: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  setPending(true);

  signIn("password", { email, password, flow: "signIn" })
    .catch(() => {
      setLocalError("Invalid email or password");
    })
    .finally(() => {
      setPending(false);
    });
};
