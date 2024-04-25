import Flex from "@/src/components/common/Flex";
import { Tabs } from "@/src/components/shadcn/Tabs";
import Grid from "@/src/components/common/Grid";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex className="min-h-screen flex-col">
      <Tabs defaultValue="all">
        <Grid className="grid grid-rows-12 items-start p-2 sm:px-6 !gap-0">
          {children}
        </Grid>
      </Tabs>
    </Flex>
  );
}
