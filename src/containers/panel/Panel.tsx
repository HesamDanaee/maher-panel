import Dashboard from "./dashboard/Dashboard";
import Setting from "./settings/Setting";

interface PanelProps {
  params: {
    slug: PanelSlugs;
  };
}

const panelSections = {
  dashboard: <Dashboard />,
  setting: <Setting />,
};

export default function Panel({ params }: PanelProps) {
  return <main className="w-full h-full">{panelSections[params.slug]}</main>;
}
