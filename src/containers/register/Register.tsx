import Grid, { GridCol } from "@/src/components/common/Grid";
import Signup from "./components/Signup";
import UniqueIdentifier from "./components/UniqueIdentifier";
import Services from "./components/Services";
import { redirect } from "next/navigation";
import List from "@/src/components/common/List";

import data from "@/public/data/data.json";
import Box from "@/src/components/common/Box";
import Typography from "@/src/components/common/Typography";
import { Separator } from "@/src/components/shadcn/Separator";
import Flex from "@/src/components/common/Flex";
import Stepper from "@/src/components/common/stepper/Stepper";

type Steps = "signup" | "uniqueIdentifier" | "services";

interface RegisterProps {
  params: {
    slug: Steps;
  };
}

export default function Register({ params: { slug } }: RegisterProps) {
  const {
    register: { steps },
  } = data;

  const stepsComponent = {
    signup: <Signup />,
    uniqueIdentifier: <UniqueIdentifier />,
    services: <Services />,
  };

  // This path should only be available for this two slugs
  if (slug !== "signup" && slug !== "uniqueIdentifier" && slug !== "services") {
    redirect("/register/signup");
  }

  return (
    <Grid className="grid-cols-8 grid-rows-12">
      <GridCol className="col-start-2 col-end-8 row-start-3 row-end-5">
        {/* <List
          className="!flex-row !h-auto items-center justify-center gap-x-1"
          list={Object.values(steps)}
          render={(step, x) => (
            <Flex className="!w-[200px] gap-x-1 items-center !my-0">
              <Flex className="basis-1/5 flex-col justify-center items-center relative">
                <Flex className="!w-10 !h-10 bg-foreground rounded-full justify-center items-center">
                  <Typography variant="p" className="text-background font-bold">
                    {x + 1}
                  </Typography>
                </Flex>
                <Flex className="w-32 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[40px] justify-center items-center">
                  <Typography
                    variant="p"
                    className="font-semibold cursor-pointer hover:text-primary"
                  >
                    {step}
                  </Typography>
                </Flex>
              </Flex>
              {x !== Object.values(steps).length - 1 && (
                <Separator orientation="horizontal" className="basis-4/5" />
              )}
            </Flex>
          )}
        /> */}

        <Stepper currentStep={4} numberOfSteps={4} />
      </GridCol>

      {/* Step */}
      {stepsComponent[slug]}
    </Grid>
  );
}
