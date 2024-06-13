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

export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const accounts = await getBankAccounts();

  return (
    <div className="flex gap-2">
      {accounts.map((account) => (
        <div key={account.id}>
          <p>{account.name}</p>
          <p>{account.balance}</p>
        </div>
      ))}
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
  );
}
