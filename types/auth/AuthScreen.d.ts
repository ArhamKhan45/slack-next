// auth screen types
export type SignInFlow = "signIn" | "signUp";

// sign in card types
export interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}
// sign up card types
export interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
