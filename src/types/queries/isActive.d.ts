interface IsActiveRes extends HttpResponse {
  status: number;
  statusCode: number;
  message: string;
  data: Data;
  error: any[];
}

interface Data {
  active: number;
}
