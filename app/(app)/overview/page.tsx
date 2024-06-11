import { AmountCard } from "@/components/amount/amount-card";
import {
  HandCoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { RecentTransactionsCard } from "./_components/recent-transactions/recent-transactions-card";
import { Card } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { TmpForm } from "./tmp-form";
import prisma from "@/lib/prisma";

async function getUserCurrencies(userId: string) {
  const currencies = await prisma.currency.findMany({
    where: {
      userId,
    },
  });
  
  return currencies;
}

export default async function OverviewPage() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }
  const currencies = await getUserCurrencies(userId);

  return (
    <div className="space-y-4 p-4 sm:p-8 h-full flex flex-col">
      {currencies.map((currency) => (
        <div key={currency.id.toString()}>{currency.code}</div>
      ))}
      <TmpForm />
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
          link="income"
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 h-full">
        <Card className="col-span-4"></Card>
        <RecentTransactionsCard />
      </div>
    </div>
  );
}
