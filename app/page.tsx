import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/overview");
  }

  return (
    <main className="flex items-center justify-center">
      <h1>Trends</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}
