import { ReactNode } from "react";
import Flex from "./Flex";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <Flex className={`sm:w-full  max-w-7xl ${className}`}>{children}</Flex>
  );
}
