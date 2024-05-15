import { ThemeProvider } from "@/components/theme/theme-provider";
import { ApolloWrapper } from "@/graphql/wrapper";
import Header from "./_components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ApolloWrapper>
          <Header />
          <main className="flex-1">{children}</main>
        </ApolloWrapper>
      </ThemeProvider>
    </div>
  );
}
