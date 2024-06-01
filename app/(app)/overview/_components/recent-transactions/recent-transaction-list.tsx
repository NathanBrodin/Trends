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
