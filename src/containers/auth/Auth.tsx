import { redirect } from "next/navigation";

import Grid, { GridCol } from "@/src/components/common/Grid";
import Box from "@/components/common/Box";
import pattern from "@/public/Illustrations/pattern2.svg";
import Image from "next/image";
import AuthCard from "./components/AuthCard";

interface AuthProps {
  params: {
    slug: "login" | "signup";
  };
}

export default function Auth({ params: { slug } }: AuthProps) {
  // This path should only be available for this two slugs
  if (slug !== "signup" && slug !== "login") {
    redirect("/auth/login");
  }

  return (
    <Box className="h-full">
      <Grid className="grid-cols-2 gap-x-2">
        <GridCol className="flex justify-center items-center">
          <AuthCard slug={slug} />
        </GridCol>
        <GridCol className="bg-muted">
          <div></div>
        </GridCol>
      </Grid>
    </Box>
  );
}
