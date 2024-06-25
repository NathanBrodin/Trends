"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { SelectBankAccount } from "@/db/schema";
import { useConfig } from "@/hooks/use-config";
import { convert } from "@/lib/currencies";

type ChartProps = {
  accounts: SelectBankAccount[];
};

export default function Chart({ accounts }: ChartProps) {
  const [config] = useConfig();
  const data: { name: string; total: number }[] = accounts.map((account) => ({
    name: account.name,
    total: convert(account.balance ?? 0, account.currency, config.currency),
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: config.currency,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(value)
          }
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
