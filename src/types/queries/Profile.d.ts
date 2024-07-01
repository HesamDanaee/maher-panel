interface ProfileRes {
  status: boolean;
  statusCode: number;
  message: string;
  data: ProfileResData;
  error: any[];
}

interface ProfileResData {
  name: string;
  mobile: string;
  email: any;
  status: number;
}
