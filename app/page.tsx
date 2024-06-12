import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/auth/login");

  return (
    <main className="flex bg-background min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
