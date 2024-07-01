interface AddLegalRes extends HttpResponse {
  status: number;
  ok: boolean;
  statusCode: number;
  message: string;
  data: Legal[];
  error: any[];
}

interface Legal {
  name: string;
  address: string;
  economic_code: string;
  type: string;
  postal_code: string;
  phone: string;
  branch: string;
  shenase_meli: string;
  user_id: number;
}
