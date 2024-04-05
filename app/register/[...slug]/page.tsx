import Register from "@/src/containers/register/Register";

type Steps = "signup" | "uniqueIdentifier" | "services";
type Taxpayer = "individual" | "legalEnteties";

interface RegisterPageProps {
  params: {
    slug: [Steps, Taxpayer];
  };
}

export default function RegisterPage({ params }: RegisterPageProps) {
  return <Register params={params} />;
}
