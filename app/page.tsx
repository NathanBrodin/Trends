import AmountCard from "@/components/amount-card";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { DollarSign } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <ThemeCustomizer />
      <AmountCard
        title="Balance"
        icon={DollarSign}
        amount={1200}
        diff="+20.1% from last month"
      />
    </main>
  );
}
