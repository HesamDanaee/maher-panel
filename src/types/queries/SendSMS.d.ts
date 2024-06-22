interface SendSMSRes extends HttpResponse {
  status: number;
  ok: boolean;
  statusCode: number;
  message: string;
  data: any[];
  error: any[];
}
