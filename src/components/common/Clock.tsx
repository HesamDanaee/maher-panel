"use client";

import { useClock } from "@/src/hooks/useClock";
import { format } from "date-fns-jalali";
import Typography from "./Typography";
import Flex from "./Flex";
import { Separator } from "../shadcn/Separator";
import Grid, { GridCol } from "./Grid";

export default function Clock() {
  const time = useClock();
  const d = new Date();

  return (
    <Grid className="!w-[180px] grid-cols-9 items-center justify-items-center">
      <GridCol className="col-span-4">
        <Typography variant="p" suppressHydrationWarning>
          {time}
        </Typography>
      </GridCol>
      <GridCol className="col-span-1">
        <Separator orientation="vertical" className="h-5 bg-secondary" />
      </GridCol>
      <GridCol className="col-span-4">
        <Typography variant="p" suppressHydrationWarning>
          {format(d, "d MMMM")}
        </Typography>
      </GridCol>
    </Grid>
  );
}
