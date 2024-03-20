import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import { ReactNode } from "react";

import data from "@/public/data.json";
import { Button } from "@/src/components/shadcn/button";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { PiFileCsvLight, PiPenNib, PiX } from "react-icons/pi";
import Grid, { GridCol } from "@/src/components/common/Grid";

interface NewInvoiceProps {
  trigger: ReactNode;
}

export default function NewInvoice({ trigger }: NewInvoiceProps) {
  const {
    panel: {
      invoice: {
        main: {
          newInvoice: {
            modal: {
              Title,
              description,
              button,
              buttons: { file, manual },
            },
          },
        },
      },
    },
  } = data;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="pt-14">
        <DialogHeader>
          <DialogTitle>
            <Typography
              variant="h4"
              className="text-start text-foreground font-light"
            >
              {Title}
            </Typography>
          </DialogTitle>
          <DialogDescription>
            <Typography
              variant="p"
              className="text-start text-secondary font-thin"
            >
              {description}
            </Typography>
          </DialogDescription>
        </DialogHeader>

        <Grid className="max-sm:grid-cols-1 max-sm:grid-rows-2 py-4">
          <GridCol className="border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
            <Flex className="items-center gap-x-2">
              <PiFileCsvLight className="w-8 h-8 group-hover:fill-accent transition-all duration-100 ease-out" />
              <Flex className="flex-col">
                <Typography variant="p" className="font-light">
                  {file.title}
                </Typography>
                <Typography variant="p" className="font-thin">
                  {file.desc}
                </Typography>
              </Flex>
            </Flex>
          </GridCol>
          <GridCol className="border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
            <Flex className="items-center gap-x-2">
              <PiPenNib className="w-8 h-8 group-hover:fill-accent transition-all duration-100 ease-out" />
              <Flex className="flex-col">
                <Typography className="font-light">{manual.title}</Typography>
                <Typography className="font-thin">{manual.desc}</Typography>
              </Flex>
            </Flex>
          </GridCol>
        </Grid>

        <DialogFooter>
          <Button
            className="w-full bg-accent text-foreground hover:bg-background hover:text-foreground border-[1px] border-accent"
            variant={"default"}
          >
            {button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
