import Flex from "@/src/components/common/Flex";
import Navs from "./components/Navs";
import Profile from "./components/Profile";
import Clock from "@/src/components/common/Clock";
import Sidebar from "../Sidebar";
import Theme from "@/src/components/common/Theme";
import { Skeleton } from "@/src/components/shadcn/skeleton";
import { Suspense } from "react";
import SSRWrapper from "@/src/components/HOC/SSRWrapper";
import APIS from "@/src/constants/apis";
import Image from "next/image";
import logo from "@/public/viraLogo.png";

export default function Header() {
  return (
    <header className="w-full h-[7vh] bg-background max-sm:fixed top-0 left-0 flex justify-between items-center border-b-[1px] border-muted px-20 max-lg:px-4">
      <Flex className="!w-auto gap-x-5 items-center">
        <Suspense fallback={<>loading</>}>
          <SSRWrapper<ProfileRes, ProfileRes>
            fetchDataBatch={{
              url: APIS.panel.profile,
            }}
          >
            {(data) => <Profile data={data as ProfileRes} />}
          </SSRWrapper>
        </Suspense>
        <Theme />
      </Flex>
      <Flex className="!w-auto gap-x-10">
        <Navs />
        <Clock />
        <Sidebar />
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="w-24 h-auto"
        />
      </Flex>
    </header>
  );
}
