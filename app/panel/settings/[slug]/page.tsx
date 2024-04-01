import Setting from "@/src/containers/panel/settings/Setting";

interface PanelProps {
  params: {
    slug: PanelSlugs;
  };
}

export default function PanelPage({ params }: PanelProps) {
  return <Setting />;
}
