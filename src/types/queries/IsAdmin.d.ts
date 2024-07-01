interface IsAdminRes {
    status: boolean
    statusCode: number
    message: string
    data: isAdminResData
    error: any[]
}

interface isAdminResData {
    is_admin: number
}
