// - * - * SWR config - * - * //

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  cache?: RequestCache;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  redirect?: RequestRedirect;
  integrity?: RequestIntegrity;
  referrer?: ReferrerPolicy;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal | null;
}
