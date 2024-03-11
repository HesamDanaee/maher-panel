"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";

import { fetcher } from "@/src/lib/swrConfig";

interface Props {
  children: ReactNode;
}

export default function SWRProvider({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
