import AmountCard from "@/components/amount-card";
import {
  HandCoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
} from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 pt-3 sm:p-8 sm:pt-6">
      <AmountCard
        title="Balance"
        icon={LandmarkIcon}
        amount={4385}
        diff="+20.1% from last month"
        animated
      />
      <AmountCard
        title="Income"
        icon={HandCoinsIcon}
        amount={2878}
        diff="20 working days in June"
        animated
      />
      <AmountCard
        title="Expenses"
        icon={ReceiptTextIcon}
        amount={1234}
        diff="-4.7% from last month"
        animated
      />
      <AmountCard
        title="Saving Estimate"
        icon={PiggyBankIcon}
        amount={1200}
        diff="0.0% from last month"
        animated
      />
    </div>
  );
}
