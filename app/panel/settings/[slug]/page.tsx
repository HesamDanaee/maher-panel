import Setting from "@/src/containers/panel/setting/Setting";

interface SettingPageProps {
  params: {
    slug: PanelSlugs;
  };
}

export default function SettingPage({ params }: SettingPageProps) {
  return <Setting />;
}
