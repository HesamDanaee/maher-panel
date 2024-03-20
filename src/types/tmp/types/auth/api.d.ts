interface LoginRes {
  access_token: string;
  token_type: "bearer" | string;
  expires_in: number;
}

interface SignUpRes {
  status: boolean;
  statusCode: number;
  message: string;
  data: any[];
  error: any[];
}
