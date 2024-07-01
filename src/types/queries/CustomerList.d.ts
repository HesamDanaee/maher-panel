interface CustomerListRes extends  HttpResponse{
    status: number
    ok:boolean
    statusCode: number
    message: string
    data: CustomerListData[][]
    error: any[]
}

interface CustomerListData {
    id: number
    user_id: number
    type: string
    national_code: any
    name: string
    economic_code: string
    shenase_meli: string
    postal_code: string
    address: string
    phone: string
    branch: any
    created_at: string
    updated_at: string
}
