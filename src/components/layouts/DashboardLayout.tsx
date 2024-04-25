import Flex from "@/src/components/common/Flex";
import { Tabs } from "@/src/components/shadcn/Tabs";
import Grid from "@/src/components/common/Grid";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex className="flex-col">
      <Tabs defaultValue="all">
        <Grid className="grid grid-rows-12 items-center p-2 sm:px-6">
          {children}
        </Grid>
      </Tabs>
    </Flex>
  );
}
