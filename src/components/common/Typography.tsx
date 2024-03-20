import { cn } from "@/src/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";
  className?: string;
}

export default function Typography({
  variant = "p",
  className,
  ...props
}: TypographyProps) {
  const elements = {
    h1: (
      <h1
        {...props}
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
      ></h1>
    ),
    h2: (
      <h2
        {...props}
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
      ></h2>
    ),
    h3: (
      <h3
        {...props}
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
      ></h3>
    ),
    h4: (
      <h4
        {...props}
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
      ></h4>
    ),

    p: <p {...props} className={cn("text-sm leading-7", className)}></p>,
    blockquote: (
      <blockquote
        className={cn("border-l-2 pl-6 italic", className)}
      ></blockquote>
    ),
  };

  return elements[variant];
}
