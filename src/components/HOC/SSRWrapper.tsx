import fetcher from "@/src/lib/fetcher";
import { ReactNode } from "react";

interface SSRWrapperProps<Res, ResError> {
  children: (data: Res | Res[]) => ReactNode;
  fetchDataBatch:
    | {
        url: string;
        method: HTTPMethods;
        payload?: BodyInit;
      }
    | {
        url: string;
        method: HTTPMethods;
        payload?: BodyInit;
      }[];
}

export default async function SSRWrapper<Res, ResError>({
  children,
  fetchDataBatch,
}: SSRWrapperProps<Res, ResError>) {
  if (!Array.isArray(fetchDataBatch)) {
    const { url, method, payload } = fetchDataBatch;

    const response = await fetcher(url, payload, method);

    return <>{children(response as Res)}</>;
  } else {
    const responses = await Promise.all(
      fetchDataBatch.map(({ url, method, payload }) =>
        fetcher(url, payload, method)
      )
    );

    return <>{children(responses as Res[])}</>;
  }
}
