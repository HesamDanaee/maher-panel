import Dashboard from "@/src/containers/panel/dashboard/Dashboard";

interface PanelProps {
  params: {
    slug: DashboardSlugs;
  };
}

export default function PanelPage({ params }: PanelProps) {
  return <Dashboard params={params} />;
}
