import { PiList } from "react-icons/pi";
import navbarData from "@/public/data/panel/header.json";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/shadcn/sheet";
import Flex from "@/src/components/common/Flex";
import List from "@/src/components/common/List";
import Link from "next/link";
import Typography from "@/src/components/common/Typography";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden max-sm:hidden">
        <PiList className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent className="w-[300px]" side={"left"}>
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}

        {/* Body */}

        <Flex className="flex-col py-10">
          <List
            list={navbarData.navbar}
            render={({ text, href }) => (
              <Link key={href} href={href}>
                <Typography variant="p" className="font-light">
                  {text}
                </Typography>
              </Link>
            )}
          />
        </Flex>
      </SheetContent>
    </Sheet>
  );
}
