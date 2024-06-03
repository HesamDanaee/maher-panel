import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmpty(
  value: string | number | Record<string, any> | any[]
): boolean {
  if (typeof value === "string") {
    return value.trim() === "";
  }
  if (typeof value == "number") {
    return value === 0;
  }
  if (Array.isArray(value) || typeof value === "object") {
    return Object.values(value).every((val) => isEmpty(val));
  }
  return false;
}

export const createQueryString = (
  searchParams: ReadonlyURLSearchParams | { [key: string]: string },
  newParams: { name: string; value?: string }[],
  action: "add" | "remove"
) => {
  const params = new URLSearchParams(searchParams.toString());

  if (action === "add") {
    for (let x of newParams) {
      const { name, value } = x;
      if (value) params.set(name, value);
    }
  } else {
    for (let x of newParams) {
      const { name } = x;
      params.delete(name);
    }
  }

  return params.toString();
};
