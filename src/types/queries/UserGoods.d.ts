interface UserGoodsRes extends HttpResponse {
    status: number;
    ok:boolean;
    statusCode: number
    message: string
    data: UserGoodsData[][]
    error: any[]
}

interface UserGoodsData {
    id: number
    good_id: number
    user_id: number
    title: string
    number: number
    unit: string
    user_creator: number
    created_at: string
    updated_at: string
}
