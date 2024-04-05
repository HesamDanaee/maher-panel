import Grid, { GridCol } from "@/src/components/common/Grid";
import Signup from "./components/Signup";
import UniqueIdentifier from "./components/UniqueIdentifier";
import Services from "./components/Services";
import { redirect } from "next/navigation";
import Stepper from "@/src/components/common/stepper/Stepper";

type Steps = "signup" | "uniqueIdentifier" | "services" | "final";
type Taxpayer = "individual" | "legalEnteties";

interface RegisterProps {
  params: {
    slug: Steps | [Steps, Taxpayer];
  };
}

export default function Register({ params: { slug } }: RegisterProps) {
  const step = typeof slug === "object" ? slug[0] : slug;
  const steps: Steps[] = ["signup", "uniqueIdentifier", "services", "final"];

  const stepsComponent = {
    signup: <Signup taxpayer={slug[1] as Taxpayer} />,
    uniqueIdentifier: <UniqueIdentifier />,
    services: <Services />,
  };

  // This path should only be available for this two slugs
  if (
    step !== "signup" &&
    step !== "uniqueIdentifier" &&
    step !== "services" &&
    step !== "final"
  ) {
    redirect("/register/signup");
  }

  return (
    <Grid className="grid-cols-8 grid-rows-12">
      <GridCol className="col-start-2 col-end-8 row-start-2 row-end-4">
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

        <Stepper currentStep={steps.indexOf(step) + 1} numberOfSteps={4} />
      </GridCol>

      {/* Step */}

      <GridCol className="col-start-2 col-end-8 row-start-5 row-end-11">
        {stepsComponent[step as Exclude<Steps, "final">]}
      </GridCol>
    </Grid>
  );
}
