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
        <Stepper currentStep={steps.indexOf(step) + 1} numberOfSteps={4} />
      </GridCol>

      {/* Step */}

      <GridCol className="col-start-2 col-end-8 row-start-5 row-end-11">
        {stepsComponent[step as Exclude<Steps, "final">]}
      </GridCol>
    </Grid>
  );
}
