import Grid, { GridCol } from "@/src/components/common/Grid";
import { ReactNode } from "react";

interface TabsLayoutProps {
  children: ReactNode;
}

export default function TabsLayout({ children }: TabsLayoutProps) {
  return (
    <Grid className="w-full h-full grid-cols-12 grid-rows-8 gap-0">
      <GridCol className="flex flex-col gap-y-3 col-start-3 max-xl:col-start-2 max-sm:col-start-1 col-end-11 max-xl:col-end-12 max-sm:col-end-13 row-start-3 max-sm:row-start-2 row-end-9 max-sm:px-3">
        {children}
      </GridCol>
    </Grid>
  );
}
