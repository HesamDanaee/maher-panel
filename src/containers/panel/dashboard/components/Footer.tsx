"use client";
import Grid, { GridCol } from "@/src/components/common/Grid";
import Typography from "@/src/components/common/Typography";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import data from "@/public/data/data.json";
import Link from "next/link";

import { PiFiles, PiUsersThree, PiPackage } from "react-icons/pi";
import { TbReceiptTax } from "react-icons/tb";
import { ReactNode } from "react";
import Flex from "@/src/components/common/Flex";

interface FooterProps {
  params: {
    slug: DashboardSlugs;
  };
}

export default function Footer({ params }: FooterProps) {
  const isMobile = useIsMobile();

  const {
    panel: {
      header: { navbar },
    },
  } = data;

  const icons: { [key: string]: ReactNode } = {
    invoice: <PiFiles className=" w-6 h-6" />,
    customers: <PiUsersThree className=" w-6 h-6" />,
    taxpayers: <TbReceiptTax className=" w-6 h-6" />,
    goods: <PiPackage className=" w-6 h-6" />,
  };

  return (
    <>
      {isMobile && (
        <Grid className="w-full !h-auto py-4 px-3 grid-cols-4 place-items-center fixed bottom-0 left-0 border-t-[1px] border-secondary bg-background">
          {navbar.map(({ mobileText, href }) => (
            <GridCol
              key={`nav-${mobileText}`}
              className={`col-span-1 ${params.slug === href && "text-accent"}`}
            >
              <Link href={href}>
                <Flex className="flex-col justify-center items-center space-y-2">
                  {icons[href]}
                  <Typography variant="p" className="text-xs">
                    {mobileText}
                  </Typography>
                </Flex>
              </Link>
            </GridCol>
          ))}
        </Grid>
      )}
    </>
  );
}
