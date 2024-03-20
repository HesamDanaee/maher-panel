"use client";

import { useClock } from "@/src/hooks/useClock";
import { format } from "date-fns";
import Typography from "./Typography";
import Flex from "./Flex";
import { Separator } from "../shadcn/Separator";
import Grid, { GridCol } from "./Grid";

export default function Clock() {
  const time = useClock();
  const d = new Date();

  return (
    <Grid className="!w-[140px] grid-cols-9 items-center">
      <GridCol className="col-span-4">
        <Typography variant="p">{time}</Typography>
      </GridCol>
      <GridCol className="col-span-1">
        <Separator orientation="vertical" className="h-5 bg-secondary" />
      </GridCol>
      <GridCol className="col-span-4">
        <Typography variant="p">{format(d, "yyyy/MM")}</Typography>
      </GridCol>
    </Grid>
  );
}
