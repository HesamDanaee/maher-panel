"use client";

import { useParams } from "next/navigation";

import navbarData from "@/public/data/panel/header.json";
import Typography from "@/src/components/common/Typography";
import Link from "next/link";

export default function Navs() {
  const params = useParams<{ slug: DashboardSlugs }>();

  return (
    <nav className="h-full max-lg:hidden">
      <ul className="h-full flex items-center gap-x-6">
        {navbarData.navbar.map(({ href, text }, x) => (
          <Link href={href} key={`nav${x}`}>
            <li>
              <Typography
                variant="p"
                className={`hover:cursor-pointer ${
                  params.slug === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground font-[400]`}
              >
                {text}
              </Typography>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
