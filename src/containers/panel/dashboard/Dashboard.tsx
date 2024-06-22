import Customers from "./components/customers/Customers";
import Footer from "./components/Footer";
import Goods from "./components/goods/Goods";
import Header from "../components/header/Header";
import Invoice from "./components/invoice/Invoice";
import Taxpayers from "./components/taxpayers/Taxpayers";
import SSRWrapper from "@/src/components/HOC/SSRWrapper";
import APIS from "@/src/constants/apis";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/shadcn/skeleton";
import Flex from "@/src/components/common/Flex";

interface DashboardProps {
  params: {
    slug: DashboardSlugs;
  };
}

export default function Dashboard({ params }: DashboardProps) {
  const { slug } = params;

  const panelSections = {
    customers: <Customers tab={slug} />,
    taxpayers: <Taxpayers tab={slug} />,
  };

  return (
    <main className="w-full h-[100vh] max-sm:max-h-[100dvh] relative overflow-hidden bg-muted/40">
      <Header />
      {slug === "invoice" ? (
        <Invoice tab={slug} isActive={true} />
      ) : slug === "goods" ? (
        <Suspense
          fallback={
            <Flex className="flex-col space-y-3 justify-center items-center">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </Flex>
          }
        >
          <SSRWrapper<GetAllGoodsRes, GetAllGoodsRes>
            fetchDataBatch={{
              url: APIS.getAllGoods,
            }}
          >
            {(data) => (
              <Goods tab={slug} goodsResult={(data as GetAllGoodsRes).data} />
            )}
          </SSRWrapper>
        </Suspense>
      ) : (
        panelSections[slug]
      )}
      <Footer params={params} />
    </main>
  );
}
