export default async function fetcher<
  Success extends HttpResponse,
  Error extends HttpResponse
>(
  url: string,
  payload?: BodyInit | null,
  method: string = "GET",
  headers: HeadersInit = {}
): Promise<Success | Error> {
  const options: RequestInit = {
    method,
    headers: {
      ...headers,
    },
    body: payload,
  };

  const res = await fetch(url, options);
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
