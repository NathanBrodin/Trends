import { ThemeProvider } from "@/components/theme/theme-provider";
import { ApolloWrapper } from "@/graphql/wrapper";
import Header from "./_components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}
      <ApolloWrapper>
        <Header />
        {children}
      </ApolloWrapper>
      {/* </ThemeProvider> */}
    </div>
  );
}
