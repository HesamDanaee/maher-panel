import { ReactNode, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Flex({ children, className, ...props }: FlexProps) {
  return (
    <div className={`w-full h-full flex ${className}`} {...props}>
      {children}
    </div>
  );
}
