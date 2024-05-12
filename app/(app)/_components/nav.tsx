"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    label: "Overview",
    href: "/overview",
  },
  {
    label: "Analytics",
    href: "/analytics",
  },
  {
    label: "Transactions",
    href: "/transactions",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <Tabs defaultValue={pathname} className="space-y-4">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.href} value={tab.href}>
            <Link href={tab.href}>{tab.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
