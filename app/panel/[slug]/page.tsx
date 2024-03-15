import Panel from "@/src/containers/panel/Panel";

interface PanelProps {
  params: {
    slug: PanelSlugs;
  };
}

export default function PanelPage({ params }: PanelProps) {
  return <Panel params={params} />;
}
