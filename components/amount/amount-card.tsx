import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Amount, AmountError, AmountSkeleton } from "./amount";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

type AmountCardProps = {
  title: string;
  link?: string;
  icon: LucideIcon;
  amount: number;
  diff?: string;
  animated?: boolean;
};

export function AmountCard({
  title,
  link,
  icon: Icon,
  amount,
  diff,
  animated,
}: AmountCardProps) {
  return (
    <Card>
      {link && (
        <Link href={link}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
        </Link>
      )}
      {!link && (
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      )}
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

export function AmountCardSkeleton({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <AmountSkeleton className="text-2xl font-bold" />
        <Skeleton className="text-xs text-transparent">
          This is a dummy text for loading
        </Skeleton>
      </CardContent>
    </Card>
  );
}

export function AmountCardError({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="bg-red-100 dark:bg-red-900">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <AmountError className="text-2xl font-bold" />
        <div className="text-xs text-transparent">
          This is a dummy text for error
        </div>
      </CardContent>
    </Card>
  );
}
