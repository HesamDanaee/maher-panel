import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import { ReactNode } from "react";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { PiFileCsvLight, PiPenNib } from "react-icons/pi";
import Grid, { GridCol } from "@/src/components/common/Grid";

interface NewInvoiceProps {
  trigger: ReactNode;

  onSubmit: (state: number) => void;
  data: {
    title: string;
    description?: string;
    btns: {
      btn1: {
        title: string;
        description: string;
      };
      btn2: {
        title: string;
        description: string;
      };
    };
    submit: string;
  };
}

export default function CreateNewModal({
  trigger,
  data,
  onSubmit,
}: NewInvoiceProps) {
  const {
    title,
    description,
    btns: { btn1, btn2 },
  } = data;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="pt-14 max-sm:w-[95%]">
        <DialogHeader>
          <DialogTitle>
            <Typography
              variant="h4"
              className="text-start text-foreground font-light"
            >
              {title}
            </Typography>
          </DialogTitle>
          {description && (
            <DialogDescription>
              <Typography
                variant="p"
                className="text-start text-ghost font-thin"
              >
                {description}
              </Typography>
            </DialogDescription>
          )}
        </DialogHeader>

        <Grid className="max-sm:grid-cols-1 max-sm:grid-rows-2 py-4">
          <GridCol className="max-sm:row-span-1 border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
            <Flex className="items-center gap-x-2" onClick={() => onSubmit(1)}>
              <PiFileCsvLight className="w-8 h-8 group-hover:fill-ghost transition-all duration-100 ease-out" />
              <Flex className="flex-col">
                <Typography variant="p" className="font-light">
                  {btn1.title}
                </Typography>
                <Typography variant="p" className="font-thin">
                  {btn1.description}
                </Typography>
              </Flex>
            </Flex>
          </GridCol>

          <GridCol className="max-sm:row-span-1 border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
            <Flex className="items-center gap-x-2">
              <PiPenNib className="w-8 h-8 group-hover:fill-ghost transition-all duration-100 ease-out" />
              <Flex className="flex-col" onClick={() => onSubmit(2)}>
                <Typography className="font-light">{btn2.title}</Typography>
                <Typography className="font-thin">
                  {btn2.description}
                </Typography>
              </Flex>
            </Flex>
          </GridCol>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
