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
