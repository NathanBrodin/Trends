import { redirect } from "next/navigation";

export default async function Home() {
  const authenticated = true;

  if (authenticated) redirect("/overview");

  return (
    <main className="flex items-center justify-center">
      <h1>Trends</h1>
    </main>
  );
}
