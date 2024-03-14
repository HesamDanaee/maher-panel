import React, { ReactNode } from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GridCol({ children, className, ...props }: GridProps) {
  return (
    <div className={`row-span-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function Grid({ children, className, ...props }: GridProps) {
  return (
    <div className={`w-full h-full grid gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
