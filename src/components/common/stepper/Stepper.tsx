import { Fragment, memo } from "react";
import style from "./style.module.css";
import List from "../List";
import Typography from "../Typography";
import Box from "../Box";
import Flex from "../Flex";
import data from "@/public/data/data.json";
import { PiCheck } from "react-icons/pi";

interface StepperProps {
  currentStep: number;
  numberOfSteps: number;
}

const Stepper = memo(function Stepper({
  currentStep,
  numberOfSteps,
}: StepperProps) {
  const isHide = (index: number) => index === numberOfSteps - 1;

  const { stepperWrapper, stepperCircle, stepperLine, isActive, btnWrapper } =
    style;

  const {
    register: {
      steps: { stepsCount, stepsName },
    },
  } = data;

  return (
    <List
      className={stepperWrapper}
      list={Array(numberOfSteps).fill(<></>)}
      render={(_, index) => {
        return (
          <Fragment key={index}>
            <Flex
              className={`${stepperCircle} ${
                currentStep >= index + 1 ? isActive : ""
              }`}
            >
              <Typography className="text-sm">
                {currentStep >= index + 1 ? (
                  <PiCheck className="text-foreground w-7 h-7" />
                ) : (
                  index + 1
                )}
              </Typography>
            </Flex>

            <Flex className="!w-auto flex-col mx-4">
              <Typography className="text-xs font-light" variant="p">
                {stepsCount[index]}
              </Typography>
              <Typography
                className={`text-md font-normal ${
                  currentStep >= index + 1 ? "text-accent" : "text-foreground"
                }`}
                variant="h4"
              >
                {stepsName[index]}
              </Typography>
            </Flex>
            {!isHide(index) && (
              <Box
                className={`${stepperLine} ${
                  currentStep > index + 1 ? isActive : ""
                } !border-none`}
              >
                <></>
              </Box>
            )}
          </Fragment>
        );
      }}
    />
  );
});

export default Stepper;
