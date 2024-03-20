import Customers from "./components/customers/Customers";
import Goods from "./components/goods/Goods";
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
  return <main className="w-full h-full">{panelSections[params.slug]}</main>;
}
