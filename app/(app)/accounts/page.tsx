import { getBankAccounts } from "@/db/actions";
import { auth } from "@clerk/nextjs/server";
import { BankAccountForm } from "./_components/bank-account-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BankAccountCard from "./_components/bank-account-card";
import { AmountCard } from "@/components/amount/amount-card";
import { LandmarkIcon } from "lucide-react";
import Chart from "./_components/chart";

export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const accounts = await getBankAccounts();
  const totalBalance = accounts.reduce(
    (acc, account) => acc + (account.balance ?? 0),
    0,
  );

  return (
    <div className="flex h-full flex-col space-y-4 p-4 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AmountCard
          title="Balance"
          link="accounts"
          icon={LandmarkIcon}
          amount={totalBalance}
          diff="+20.1% from last month"
        />
        {accounts.map((account) => (
          <BankAccountCard key={account.id} account={account} />
        ))}
      </div>
      <div className="grid h-full gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Chart accounts={accounts} />
          </CardContent>
        </Card>
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-lg">Add a new bank account</CardTitle>
            <CardDescription>
              Create a new bank account to track your finances.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BankAccountForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
