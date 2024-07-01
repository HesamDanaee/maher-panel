import Customers from "./components/customers/Customers";
import Footer from "./components/Footer";
import Goods from "./components/goods/Goods";
import Header from "../components/header/Header";
import Invoice from "./components/invoice/Invoice";
import Taxpayers from "./components/taxpayers/Taxpayers";
import SSRWrapper from "@/src/components/HOC/SSRWrapper";
import APIS from "@/src/constants/apis";
import {ReactNode, Suspense} from "react";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/shadcn/card"

interface DashboardProps {
    params: {
        slug: DashboardSlugs;
    };
}

export default function Dashboard({params}: DashboardProps) {
    const {slug} = params;

    if (!cookies().get("token")) redirect("/auth/login")


    // const tabs: { [key in DashboardSlugs]: ReactNode } = {
    //     goods: <Goods tab={slug}/>,
    //     customers: <Customers tab={slug}/>,
    //     invoice: <Invoice tab={slug}/>,
    //     taxpayers: <Taxpayers tab={slug}/>
    // }


    return (
        <main className="w-full h-[100vh] max-sm:max-h-[100dvh] relative overflow-hidden bg-muted/40">
            <Header/>

            <Suspense
                fallback={
                    <Flex className="justify-center items-center">
                        <Typography variant="h4">درحال بارگیری...</Typography>
                    </Flex>
                }
            >
                <SSRWrapper
                    fetchDataBatch={[
                        {
                            url: APIS.panel.goods.goodsList,
                        },
                        {
                            url: APIS.panel.customer.getCustomerList,
                        },
                        {
                            url: APIS.panel.goods.userGoodsList,
                        },
                        {
                            url: APIS.panel.isAdmin,
                            method: "POST",
                        }
                    ]}
                >
                    {(data) =>
                        slug === "goods" ? (
                            <Goods
                                tab={slug}
                                goodsResult={(data as [GetAllGoodsRes, GetAllGoodsRes])[0].data}
                                userGoodsList={(data as [GetAllGoodsRes, any, UserGoodsRes,IsAdminRes])[2].data}
                            />
                        ) : slug === "customers" ? (
                            <Customers tab={slug} customerList={(data as [GetAllGoodsRes, CustomerListRes, UserGoodsRes,IsAdminRes])[1].data} />
                        ) : slug === "invoice" ? (
                            <Invoice tab={slug} isActive={true}/>
                        ) : (data as [GetAllGoodsRes, any, any,IsAdminRes])[3].data.is_admin === 0 ?
                            (<Flex className="items-center justify-center">
                                <Card>
                                    <CardHeader className={"text-center gap-y-4"}>
                                        <CardTitle>خطای دسترسی</CardTitle>
                                        <CardDescription>فقط ادمین میتواند به این بخش دسترسی داشته باشد</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Flex>) : <Taxpayers tab={slug}/>


                    }
                </SSRWrapper>
            </Suspense>
            <Footer params={params}/>
        </main>
    );
}
