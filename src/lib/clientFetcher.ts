"use client";
import { createQueryString, getCookie } from "@/src/lib/utils";
import { ReadonlyURLSearchParams } from "next/navigation";

export default async function fetcher<
  Success extends HttpResponse,
  Error extends HttpResponse
>(
  url: string,
  method: string = "GET",
  payload?: BodyInit | null,
  headers: HeadersInit = {},
  urlParams?: {
    searchParams: ReadonlyURLSearchParams | { [key: string]: string };
    params: { name: string; value: string }[];
  },
  requestOptions?: RequestInit
): Promise<Success | Error> {
  const options: RequestInit = {
    ...requestOptions,
    method,
    headers: {
      Authorization: `Bearer ${getCookie("token") ?? ""}`,
      ...headers,
    },
    body: payload,
  };

  const { params, searchParams } = urlParams ?? {};

  const reqURL =
    urlParams && searchParams && params
      ? url + "?" + createQueryString(searchParams, params, "add")
      : url;

  const res = await fetch(reqURL, options);
  const { ok, status } = res;
  const data = await res.json();

  if (ok)
    return {
      status,
      ok,
      ...data,
    } as Success;

  return {
    status,
    ok,
    ...data,
  } as Error;
}
