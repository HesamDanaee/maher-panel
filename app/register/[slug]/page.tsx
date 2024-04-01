import Grid from "@/src/components/common/Grid";
import Register from "@/src/containers/register/Register";

interface RegisterPageProps {
  params: {
    slug: "signup" | "uniqueIdentifier" | "services";
  };
}

export default function RegisterPage({ params }: RegisterPageProps) {
  return <Register params={params} />;
}
