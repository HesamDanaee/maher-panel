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

export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
};

/**
 * Set a cookie
 * @param name - The name of the cookie
 * @param value - The value of the cookie
 * @param days - Optional number of days until the cookie expires
 * @param path - Optional cookie path (default is '/')
 * @param domain - Optional cookie domain
 * @param secure - Optional secure flag
 */
export const setCookie = (
  name: string,
  value: string,
  days?: number,
  path: string = "/",
  domain?: string,
  secure?: boolean
): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  const cookieValue = encodeURIComponent(value);
  let cookie = `${name}=${cookieValue}${expires}; path=${path}`;
  if (domain) {
    cookie += `; domain=${domain}`;
  }
  if (secure) {
    cookie += `; secure`;
  }
  document.cookie = cookie;
};
