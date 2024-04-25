import { NotFoundIllustration } from "@/public/Illustrations/illustrations";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import data from "@/public/data/data.json";
import Link from "next/link";
import { Button } from "@/src/components/shadcn/button";

export default function NotFound() {
  const {
    "404": { title, link },
  } = data;
  return (
    <main className="w-screen h-screen flex place-content-center items-center">
      <Flex className="!w-auto !h-auto flex-col items-center space-y-4">
        <NotFoundIllustration foreground="" background="" accent="" />
        <Typography variant="h3" className="text-foreground font-bold">
          {title}
        </Typography>
        <Link href={link.href}>
          <Button variant={"default"}>
            <Typography
              variant="p"
              className="text-muted-foregroun font-normal"
            >
              {link.text}
            </Typography>
          </Button>
        </Link>
      </Flex>
    </main>
  );
}
