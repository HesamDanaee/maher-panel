import fetcher from "@/src/lib/fetcher";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ReactNode } from "react";

interface SSRWrapperProps<Res, ResError> {
  children: (data: Res | Res[]) => ReactNode;
  fetchDataBatch:
    | {
        url: string;
        method?: HTTPMethods;
        payload?: Object;
        headers?: HeadersInit;
        urlParams?: {
          searchParams: ReadonlyURLSearchParams | { [key: string]: string };
          params: { name: string; value: string }[];
        };
        requestOptions?: RequestInit;
      }
    | {
        url: string;
        method?: HTTPMethods;
        payload?: Object;
        headers?: HeadersInit;
        urlParams?: {
          searchParams: ReadonlyURLSearchParams;
          params: { name: string; value: string }[];
        };
        requestOptions?: RequestInit;
      }[];
}

export default async function SSRWrapper<Res, ResError>({
  children,
  fetchDataBatch,
}: SSRWrapperProps<Res, ResError>) {
  if (!Array.isArray(fetchDataBatch)) {
    const { url, method, payload, headers, requestOptions, urlParams } =
      fetchDataBatch;

    const response = await fetcher(
      url,
      method,
      JSON.stringify(payload),
      headers,
      urlParams,
      requestOptions
    );

    return <>{children(response as Res)}</>;
  } else {
    const responses = await Promise.all(
      fetchDataBatch.map(
        ({ url, method, payload, headers, urlParams, requestOptions }) =>
          fetcher(
            url,
            method,
            JSON.stringify(payload),
            headers,
            urlParams,
            requestOptions
          )
      )
    );

    return <>{children(responses as Res[])}</>;
  }
}
