import { AmountCard } from "@/components/amount-card";
import {
  HandCoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { RecentTransactionsCard } from "./_components/recent-transactions/recent-transactions-card";
import { Card } from "@/components/ui/card";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { data: "Hello world" };
}

export default async function OverviewPage() {
  const data = await getData();
  return (
    <div className="space-y-4 p-4 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4"></Card>
        <RecentTransactionsCard />
      </div> */}
    </div>
  );
}
