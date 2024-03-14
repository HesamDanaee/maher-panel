import Auth from "@/src/containers/auth/Auth";
import React from "react";

interface LoginSignupProps {
  params: {
    slug: "login" | "signup";
  };
}
export default function LoginSignup({ params }: LoginSignupProps) {
  return <Auth params={params} />;
}
