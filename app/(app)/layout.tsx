import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./_components/header";
import { auth } from "@clerk/nextjs/server";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  auth().protect();

  return (
    <div className="flex h-screen max-w-7xl flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <main className="flex-1">{children}</main>
      </ThemeProvider>
    </div>
  );
}
