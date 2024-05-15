import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentTransaction } from "./columns";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

async function getData(): Promise<RecentTransaction[]> {
  return [
    {
      id: "0",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "1",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "2",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "3",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "4",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "5",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "6",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
    {
      id: "7",
      category: "House",
      name: "Rent",
      amount: 8000,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
  ];
}

export async function RecentTransactionsCard() {
  const data = await getData();

  return (
    <Card className="col-span-3 flex flex-col pb-2">
      <CardHeader className="flex-row justify-between align-top p-6">
        <div className="space-y-1.5">
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
          <CardDescription>You spent a lot of money recently.</CardDescription>
        </div>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </CardHeader>
      <CardContent className="px-0 flex-1 overflow-scroll">
        <div className="max-h-0">
          {data.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center transition-colors hover:bg-muted/50 py-3 px-6 rounded-lg"
            >
              <div className="size-9 flex items-center justify-center rounded-full bg-muted">
                H
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function RecentTransactionsCardSkeleton() {
  return <div>Loading that thing</div>;
}
