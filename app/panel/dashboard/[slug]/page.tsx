import Dashboard from "@/src/containers/panel/dashboard/Dashboard";
import md from "@/public/data/metadata.json";
import { Metadata } from "next";
interface PanelProps {
  params: {
    slug: DashboardSlugs;
  };
}

export async function generateMetadata({
  params,
}: PanelProps): Promise<Metadata> {
  return {
    ...md.panel[params.slug],
  };
}

export default function PanelPage({ params }: PanelProps) {
  return <Dashboard params={params} />;
}
