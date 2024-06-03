interface SignupRes extends HttpResponse {
  status: number;
  statusCode: number;
  message: string;
  data: any[];
  error: any[];
}

interface LoginRes extends HttpResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface LoginResErr extends HttpResponse {
  error: string;
}

interface ResetCodeRes extends HttpResponse {
  status: number;
  message: string;
}
