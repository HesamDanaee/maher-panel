"use client";

import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import { PiPlus, PiFileCsvLight, PiPenNib } from "react-icons/pi";
import Typography from "@/src/components/common/Typography";

import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/src/components/shadcn/Dropdown-menu";

import IndividualForm from "./IndividualForm";
import LegalEntitiesForm from "./LegalEntitiesForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import customersData from "@/public/data/panel/customers.json";
import { useState } from "react";
import Box from "@/src/components/common/Box";

export default function CreateNewCustomer() {
  const [selectedForm, setSelectedForm] = useState<
    "individual" | "legalEntities"
  >("individual");

  const {
    newCustomer: { options, button },
  } = customersData;

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

        <DropdownMenuContent className="w-36 bg-foreground">
          <Flex className="flex-col gap-y-1">
            {options.map(({ title, icon, options }, z) =>
              icon === "manual" ? (
                <DropdownMenuSub key={`${title}-${z}`}>
                  <DropdownMenuSubTrigger
                    dir="rtl"
                    className="bg-gray hover:!bg-gray-foreground cursor-pointer"
                  >
                    <Typography
                      variant="p"
                      className="font-medium text-background"
                    >
                      {title}
                    </Typography>
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent
                    className="w-36 bg-foreground"
                    sideOffset={10}
                    alignOffset={-5}
                  >
                    <Flex className="flex-col gap-y-1">
                      {options?.map(({ title, icon }, x) => (
                        <DialogTrigger key={`${title}-${x}`}>
                          <DropdownMenuItem
                            className="bg-gray hover:!bg-gray-foreground cursor-pointer"
                            onClick={() =>
                              setSelectedForm(
                                icon === "individual"
                                  ? "individual"
                                  : "legalEntities"
                              )
                            }
                          >
                            <Flex className="justify-between items-center">
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
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem
                  key={`${title}-${z}`}
                  className="bg-gray hover:!bg-gray-foreground cursor-pointer"
                >
                  <Flex className="justify-between items-center">
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
              )
            )}
          </Flex>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <Box className="py-6">
          {selectedForm === "individual" ? (
            <IndividualForm />
          ) : (
            <LegalEntitiesForm />
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
