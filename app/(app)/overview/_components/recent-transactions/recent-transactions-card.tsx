import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentTransaction } from "./columns";

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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
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
      category: "Food",
      name: "Fly Chicken Storo",
      amount: 199,
      currency: "NOK",
      bankAccountName: "Lydia",
    },
  ];
}

export async function RecentTransactionsCard() {
  const data = await getData();

  return (
    <Card className="col-span-3 h-full">
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
        <CardDescription>You spent a lot of money recently.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center">
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
        <div className="flex items-center">
          <div className="size-9 flex items-center justify-center rounded-full bg-muted">
            F
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              Fly Chicken Storo
            </p>
            <p className="text-sm text-muted-foreground flex gap-1">
              <span>14/05</span>
              {" - "} <span>Lydia</span>
            </p>
          </div>
          <div className="ml-auto font-medium">-NOK 199</div>
        </div>
        <div className="flex items-center">
          <div className="size-9 flex items-center justify-center rounded-full bg-muted">
            S
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Salary</p>
            <p className="text-sm text-muted-foreground flex gap-1">
              <span>14/05</span>
              {" - "} <span>Lydia</span>
            </p>
          </div>
          <div className="ml-auto font-medium">+NOK 60,234</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecentTransactionsCardSkeleton() {
  return <div>Loading that thing</div>;
}
