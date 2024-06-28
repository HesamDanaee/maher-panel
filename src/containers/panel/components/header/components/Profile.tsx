import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import staticData from "@/public/data/panel/header.json";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/shadcn/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/popover";
import { PiGearFine, PiUser } from "react-icons/pi";

interface ProfileProps {
  data: ProfileRes;
}

export default function Profile({ data }: ProfileProps) {
  const {
    profile: { profile, settings, logout },
  } = staticData;

  const {
    data: { name, mobile, email },
  } = data;

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="avatar"
            className="hover:cursor-pointer"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent className="p-0" align="start">
        {/* Header */}
        <Flex className="flex-col border-b-[1px] border-secondary py-2 px-4">
          <Typography variant="p" className="font-light">
            {name}
          </Typography>
          <Typography variant="p" className="text-ghost font-extralight">
            {mobile}
          </Typography>

          {email && (
            <Typography variant="p" className="text-ghost font-extralight">
              {email}
            </Typography>
          )}
        </Flex>

        {/* Body */}
        <Flex className="flex-col py-2 px-1">
          <Flex className="justify-between items-center py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition">
            <Typography variant="p" className="text-foreground font-extralight">
              {profile}
            </Typography>
            <PiUser className="w-5 h-5" />
          </Flex>
          <Flex className="justify-between items-center py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition group">
            <Typography variant="p" className="text-foreground font-extralight">
              {settings}
            </Typography>
            <PiGearFine className="w-5 h-5 group-hover:rotate-45 transition duration-100 ease-out" />
          </Flex>
        </Flex>

        {/* Footer */}
        <Flex className="border-t-[1px] border-secondary py-2 px-1">
          <Flex className="py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition">
            <Typography variant="p" className="text-foreground font-extralight">
              {logout}
            </Typography>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
