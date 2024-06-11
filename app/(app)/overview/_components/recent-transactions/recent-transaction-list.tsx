import { Category, categories } from "@/registry/categories";
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

export default function RecentTransactionList() {
  const data = getData();

  return (
    <div className="max-h-0">
      {data.map((transaction) => (
        <RecentTransactionItem {...transaction} key={transaction.id} />
      ))}
    </div>
  );
}

type RecentTransactionItemProps = {
  category: Category;
};

function RecentTransactionItem({ category }: RecentTransactionItemProps) {
  return (
    <div className="flex items-center rounded-lg px-6 py-3 transition-colors hover:bg-muted/50">
      <div
        className={cn(
          "flex size-9 items-center justify-center rounded-full p-2",
          `bg-red-500/10`,
        )}
      >
        <category.icon className={`text-[${category.color}]`} />
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">House rent</p>
        <p className="flex gap-1 text-sm text-muted-foreground">
          <span>14/05</span>
          {" - "} <span>Lydia</span>
        </p>
      </div>
      <div className="ml-auto font-medium">-NOK 8000</div>
    </div>
  );
}
