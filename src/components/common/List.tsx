import { ReactNode } from "react";
import Flex from "./Flex";

interface ListProps<X> {
  list: X[];
  className?: string;
  render: (item: X, index: number) => ReactNode;
}

export default function List<X>({ list, className, render }: ListProps<X>) {
  return (
    <ul>
      <Flex className={`flex-col space-y-2 ${className}`}>
        {list.map(render)}
      </Flex>
    </ul>
  );
}
