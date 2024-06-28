import Auth from "@/src/containers/auth/Auth";
import md from "@/public/data/metadata.json";
import React from "react";
import { Metadata } from "next";

interface LoginSignupProps {
  params: {
    slug: "login" | "signup";
  };
}
export async function generateMetadata({
  params,
}: LoginSignupProps): Promise<Metadata> {
  return {
    ...md.auth[params.slug],
  };
}

export default function LoginSignup({ params }: LoginSignupProps) {
  return <Auth params={params} />;
}
