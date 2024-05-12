import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Amount } from "./amount";

type AmountCardProps = {
  title: string;
  icon: LucideIcon;
  amount: number;
  diff?: string;
  animated?: boolean;
};

export default function AmountCard({
  title,
  icon: Icon,
  amount,
  diff,
  animated,
}: AmountCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Amount
          amount={amount}
          currency="EUR"
          className="text-2xl font-bold"
          animated={animated}
        />
        <p className="text-xs text-muted-foreground">{diff}</p>
      </CardContent>
    </Card>
  );
}
