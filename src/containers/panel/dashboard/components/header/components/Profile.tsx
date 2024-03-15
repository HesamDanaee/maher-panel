"use client";

import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/shadcn/avatar";
import { Button } from "@/src/components/shadcn/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/popover";

export default function Profile() {
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
          <Typography variant="p">حسام دانائی</Typography>
          <Typography variant="p" className="text-ghost">
            HesamDanaey@outlook.com
          </Typography>
        </Flex>

        {/* Body */}
        <Flex className="flex-col py-2 px-1">
          <Flex className="py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition">
            <Typography variant="p">پروفایل</Typography>
          </Flex>
          <Flex className="py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition">
            <Typography variant="p" className="text-foreground">
              تنظیمات
            </Typography>
          </Flex>
        </Flex>

        {/* Footer */}
        <Flex className="border-t-[1px] border-secondary py-2 px-1">
          <Flex className="py-1 hover:cursor-pointer hover:bg-muted px-2 rounded-sm bgTransition">
            <Typography variant="p">خروج از حساب</Typography>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
