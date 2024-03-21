"use client";

import { ReactNode } from "react";
import Flex from "./Flex";
import List from "./List";

import { useIsMobile } from "@/src/hooks/useIsMobile";

interface DataCardProps<X> {
  list: X[];
  className?: string;
  render: (item: X, index: number) => ReactNode;
}

export default function DataCard<X>({
  list,
  className,
  render,
}: DataCardProps<X>) {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && (
        <Flex
          className={`flex-col basis-5/6 overflow-y-auto py-1 ${className}`}
        >
          <List list={list} render={render} />
        </Flex>
      )}
    </>
  );
}
