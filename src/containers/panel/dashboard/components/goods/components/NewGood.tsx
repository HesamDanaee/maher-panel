"use client";

import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import { PiPlus, PiFileCsvLight, PiPenNib } from "react-icons/pi";
import Typography from "@/src/components/common/Typography";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/Dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import goodsData from "@/public/data/panel/goods.json";
import Box from "@/src/components/common/Box";
import NewGoodForm from "./NewGoodForm";
export default function NewGood() {
  const {
    newGood: {
      button,
      options,
      newGoodForm: { submit },
    },
  } = goodsData;

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="h-8 gap-1">
            <PiPlus className="h-3.5 w-3.5" />
            <Typography className="text-background sr-only sm:not-sr-only sm:whitespace-nowrap">
              {button}
            </Typography>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full bg-foreground">
          <Flex className="flex-col gap-y-1">
            {options.map(({ title, icon }, z) => (
              <DialogTrigger key={`${title}-${z}`}>
                <DropdownMenuItem className="bg-gray hover:!bg-gray-foreground cursor-pointer">
                  <Flex className="items-center justify-between">
                    {
                      {
                        file: (
                          <PiFileCsvLight className="w-5 h-5 text-background" />
                        ),
                        manual: (
                          <PiPenNib className="w-5 h-5 text-background" />
                        ),
                      }[icon]
                    }
                    <Typography
                      variant="p"
                      className="font-medium text-background"
                    >
                      {title}
                    </Typography>
                  </Flex>
                </DropdownMenuItem>
              </DialogTrigger>
            ))}
          </Flex>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="!min-w-[800px] !h-auto">
        <NewGoodForm />

        <DialogFooter>
          <Button className="w-full" variant="default">
            {submit}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
