import { NetworkErr } from "./errors";

export async function fetcher(url: string, options: RequestInit) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new NetworkErr(
        "networkErr",
        "something went wrong while fetching data",
        url,
        res.status,
        res.ok,
      );
    }

    const contentType = res.headers.get("Content-Type");
    if (contentType !== "application/json") {
      throw new NetworkErr("contentType-Error", "", url, res.status, res.ok);
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}
