import dynamic from "next/dynamic";

import Flex from "@/src/components/common/Flex";
import Navs from "./components/Navs";
import Profile from "./components/Profile";

import Clock from "@/src/components/common/Clock";

export default function Header() {
  return (
    <header className="w-full h-[7vh] flex justify-between items-center border-b-[1px] border-muted px-20 max-sm:px-4">
      <Profile />
      <Flex className="!w-auto gap-x-10">
        <Navs />
        <Clock />
      </Flex>
    </header>
  );
}
