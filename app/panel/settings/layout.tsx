import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SettingPageLayout({ children }: Props) {
  return <div>{children}</div>;
}
