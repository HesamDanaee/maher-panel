import { redirect } from "next/navigation";

import Grid, { GridCol } from "@/src/components/common/Grid";
import Box from "@/components/common/Box";

import Image from "next/image";
import AuthCard from "./components/AuthCard";

import Typography from "@/src/components/common/Typography";
import data from "@/public/data/data.json";
import Flex from "@/src/components/common/Flex";

interface AuthProps {
  params: {
    slug: "login" | "signup" | "verify";
  };
}

export default async function Auth({ params: { slug } }: AuthProps) {
  const {
    auth: {
      cta: { title, subtitle },
    },
  } = data;

  // This path should only be available for this two slugs
  if (slug !== "signup" && slug !== "login" && slug !== "verify") {
    redirect("/auth/signup");
  }

  return (
    <Grid className="grid-cols-2 max-lg:grid-cols-1 gap-x-2">
      <GridCol className="flex justify-center items-center">
        <AuthCard slug={slug} />
      </GridCol>
      <GridCol className="flex flex-col justify-center items-center bg-foreground max-lg:hidden relative">
        <Flex className="!w-2/3 max-xl:!w-3/4 !h-auto flex-col items-center text-center space-y-6">
          <Image
            src={"/Illustrations/intro-2.svg"}
            alt="intro"
            width={400}
            height={400}
            className="w-full max-w-[500px] h-auto"
          />

          <Typography variant="h2" className="text-background">
            {title}
          </Typography>
          <Typography
            variant="p"
            className="text-background tracking-normal leading-6"
          >
            {subtitle}
          </Typography>
        </Flex>
      </GridCol>
    </Grid>
  );
}
