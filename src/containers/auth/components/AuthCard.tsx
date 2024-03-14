import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import { Separator } from "@/src/components/shadcn/Separator";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import AuthForm from "./AuthForm";
import { login, signup } from "./AuthActions";
import data from "@/public/data.json";

interface AuthCardProps {
  slug: "login" | "signup";
}

export default function AuthCard({ slug }: AuthCardProps) {
  const {
    auth: {
      login: { button, title, notif, inputs },
      signup: {
        title: sTitle,
        button: sButton,
        notif: sNotif,
        inputs: sInputs,
      },
    },
  } = data;

  return (
    <Card className="w-1/2 flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center">
        <CardTitle>{slug === "login" ? title : sTitle}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm
          action={slug === "login" ? login : signup}
          inputs={slug === "login" ? inputs : sInputs}
        />
      </CardContent>
      <CardFooter>
        <Flex className="flex-col gap-y-4 items-center">
          <Button
            className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
            variant={"default"}
          >
            {slug === "login" ? button : sButton}
          </Button>
          <Separator orientation="horizontal" className="relative my-3">
            <Typography
              variant="p"
              className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2"
            >
              {slug === "signup" ? sNotif[1] : notif[1]}
            </Typography>
          </Separator>

          <Link href={slug === "login" ? "signup" : "login"} className="w-full">
            <Button
              className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
              variant={"default"}
            >
              {slug === "signup" ? button : sButton}
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}
