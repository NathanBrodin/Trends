import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category, categories } from "@/registry/categories";
import { PlusIcon } from "lucide-react";
import { RecentTransaction } from "./recent-transactions-card";
import { cn } from "@/lib/utils";

function getData(): RecentTransaction[] {
  return [
    {
      id: "0",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "1",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "2",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "3",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "4",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "5",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "6",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "7",
      category: categories[0],
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
  ];
}

export default function RecentTransactionList({
  handleCarouselChange,
}: {
  handleCarouselChange: () => void;
}) {
  const data = getData();

  return (
    <Card className="pb-2 h-full">
      <CardHeader className="flex-row justify-between align-top p-6">
        <div className="space-y-1.5">
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
          <CardDescription>You spent a lot of money recently.</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleCarouselChange}>
          <PlusIcon />
        </Button>
      </CardHeader>
      <CardContent className="px-0 flex-1 h-full overflow-scroll">
        <div className="max-h-0">
          {data.map((transaction) => (
            <RecentTransactionItem {...transaction} key={transaction.id} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type RecentTransactionItemProps = {
  category: Category;
};

function RecentTransactionItem({ category }: RecentTransactionItemProps) {
  return (
    <div className="flex items-center transition-colors hover:bg-muted/50 py-3 px-6 rounded-lg">
      <div
        className={cn(
          "size-9 flex items-center justify-center rounded-full p-2",
          `bg-red-500/10`,
        )}
      >
        <category.icon className={`text-[${category.color}]`} />
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">House rent</p>
        <p className="text-sm text-muted-foreground flex gap-1">
          <span>14/05</span>
          {" - "} <span>Lydia</span>
        </p>
      </div>
      <div className="ml-auto font-medium">-NOK 8000</div>
    </div>
  );
}
