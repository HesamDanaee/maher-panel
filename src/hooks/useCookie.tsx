"use client";

import { useState } from "react";
import Cookies from "js-cookie";

interface CookieFunctions {
  setCookie: (
    name: string,
    value: string,
    options?: Cookies.CookieAttributes
  ) => void;
  getCookie: (name: string) => string | undefined;
  removeCookie: (name: string) => void;
  getAllCookies: () => Record<string, string>;
  clearAllCookies: () => void;
}

const useCookies = (): {
  cookies: Record<string, string>;
} & CookieFunctions => {
  // State to hold the cookie values
  const [cookies, setCookies] = useState<Record<string, string>>({});

  // Function to set a cookie
  const setCookie: CookieFunctions["setCookie"] = (name, value, options) => {
    Cookies.set(name, value, options);
    setCookies({ ...cookies, [name]: value });
  };

  // Function to get a cookie by name
  const getCookie: CookieFunctions["getCookie"] = (name) => {
    return Cookies.get(name);
  };

  // Function to remove a cookie by name
  const removeCookie: CookieFunctions["removeCookie"] = (name) => {
    Cookies.remove(name);
    const { [name]: deletedCookie, ...remainingCookies } = cookies;
    setCookies(remainingCookies);
  };

  // Function to get all cookies
  const getAllCookies: CookieFunctions["getAllCookies"] = () => {
    return Cookies.get();
  };

  // Function to clear all cookies
  // Function to clear all cookies
  const clearAllCookies: CookieFunctions["clearAllCookies"] = () => {
    Object.keys(cookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    setCookies({});
  };

  return {
    cookies,
    setCookie,
    getCookie,
    removeCookie,
    getAllCookies,
    clearAllCookies,
  };
};

export default useCookies;
