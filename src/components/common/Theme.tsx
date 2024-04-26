"use client";

import { useTheme } from "next-themes";
import { PiMoonStarsFill, PiSunFill } from "react-icons/pi";
import Flex from "./Flex";

export default function Theme() {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Flex
      className="!w-10 !h-10 justify-center items-center border-[1px] border-border rounded-full cursor-pointer hover:bg-border group transition duration-100 ease-out"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? (
        <PiSunFill className="w-5 h-5 text-foreground group-hover:rotate-45" />
      ) : (
        <PiMoonStarsFill className="w-5 h-5 text-primary" />
      )}
    </Flex>
  );
}
