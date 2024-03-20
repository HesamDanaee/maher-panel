import Customers from "./components/customers/Customers";
import Footer from "./components/Footer";
import Goods from "./components/goods/Goods";
import Header from "./components/header/Header";
import Invoice from "./components/invoice/Invoice";
import Taxpayers from "./components/taxpayers/Taxpayers";

interface DashboardProps {
  params: {
    slug: DashboardSlugs;
  };
}

const panelSections = {
  invoice: <Invoice />,
  customers: <Customers />,
  taxpayers: <Taxpayers />,
  goods: <Goods />,
};

export default function Dashboard({ params }: DashboardProps) {
  return (
    <main className="w-full h-[93vh] relative">
      <Header />
      {panelSections[params.slug]}
      <Footer params={params} />
    </main>
  );
}
