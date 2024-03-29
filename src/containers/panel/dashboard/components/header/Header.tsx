import Flex from "@/src/components/common/Flex";
import Navs from "./components/Navs";
import Profile from "./components/Profile";

import Clock from "@/src/components/common/Clock";
import Sidebar from "../Sidebar";

export default function Header() {
  return (
    <header className="w-full h-[7vh] max-sm:fixed top-0 left-0 flex justify-between items-center border-b-[1px] border-muted px-20 max-lg:px-4">
      <Profile />
      <Flex className="!w-auto gap-x-10">
        <Navs />
        <Clock />
        <Sidebar />
      </Flex>
    </header>
  );
}
