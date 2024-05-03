interface HttpResponse {
  status: number;
  ok: boolean;
}

type HTTPMethods = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
