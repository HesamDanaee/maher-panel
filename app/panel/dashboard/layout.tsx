import Grid, { GridCol } from "@/src/components/common/Grid";
import Header from "@/src/containers/panel/dashboard/components/header/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <article className="w-full h-full">
      <main>{children}</main>
    </article>
  );
}
