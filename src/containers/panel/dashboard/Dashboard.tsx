import Customers from "./components/customers/Customers";
import Footer from "./components/Footer";
import Goods from "./components/goods/Goods";
import Header from "../components/header/Header";
import Invoice from "./components/invoice/Invoice";
import Taxpayers from "./components/taxpayers/Taxpayers";

interface DashboardProps {
  params: {
    slug: DashboardSlugs;
  };
}

export default function Dashboard({ params }: DashboardProps) {
  const panelSections = {
    invoice: <Invoice tab={params.slug} />,
    customers: <Customers tab={params.slug} />,
    taxpayers: <Taxpayers tab={params.slug} />,
    goods: <Goods tab={params.slug} />,
  };

  return (
    <main className="w-full h-[100vh] max-sm:max-h-[100dvh] relative overflow-hidden bg-muted/40">
      <Header />
      {panelSections[params.slug]}
      <Footer params={params} />
    </main>
  );
}
