import React from "react";
import bcrypt from "bcryptjs";

// Sign-up using password
export const onPasswordSignUp = async (
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
    setLocalError("Passwords do not match");
    return;
  }

  setPending(true);

  try {
    // Hash the password before proceeding
    const hashedPassword = await bcrypt.hash(password, 10);

    await signIn("password", {
      name,
      email,
      password: hashedPassword,
      flow: "signUp",
    });
  } catch (error) {
    console.error("Sign-up error:", error);
    setLocalError("Something went wrong");
  } finally {
    setPending(false);
  }
};

// signIn using password
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
