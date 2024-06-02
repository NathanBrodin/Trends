import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/overview");
  }

  return (
    <main className="flex items-center justify-center">
      <h1>Trends</h1>
    </main>
  );
}
