import { ReactNode } from "react";

interface SSRWrapperProps<Payload, Res, ResError> {
  children: (data: Res) => ReactNode;
  fetcher: (data: Payload) => Promise<Res | ResError>;
  payload: Payload;
}

export default async function SSRWrapper<Payload, Res, ResError>({
  children,
  payload,
  fetcher,
}: SSRWrapperProps<Payload, Res, ResError>) {
  const data = await fetcher(payload);

  return <>{children(data as Res)}</>;
}
