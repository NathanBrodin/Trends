import { Amount } from "@/components/amount/amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectBankAccount } from "@/db/schema";

type BankAccountCardProps = {
  account: SelectBankAccount;
};

export default function BankAccountCard({ account }: BankAccountCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="self-center font-display font-bold tracking-tight">
          {account.name}
        </CardTitle>
        <CardContent className="flex">
          <Amount amount={account.balance ?? 0} currency={account.currency} />
          {account.interestRate && account.interestRate > 0 && (
            <p className="rounded-sm bg-muted px-2 py-1 text-muted-foreground">
              {account.interestRate}%
            </p>
          )}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
