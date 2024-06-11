"use client";

import { useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Category } from "@/registry/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Currency } from "@/registry/currencies";
import RecentTransactionList from "./recent-transaction-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { RecentTransactionForm } from "./recent-transaction-form";

export type RecentTransaction = {
  id: string;
  category: Category;
  name: string;
  amount: number;
  currency: Currency;
  bankAccountName?: string;
};

export function RecentTransactionsCard() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel className="col-span-3 flex" setApi={setApi}>
      <CarouselContent className="h-full">
        <CarouselItem className="h-full">
          <Card className="h-full pb-2">
            <CardHeader className="flex-row justify-between p-6 align-top">
              <div className="space-y-1.5">
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
                <CardDescription>
                  You spent a lot of money recently.
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollNext()}
              >
                <PlusIcon />
              </Button>
            </CardHeader>
            <CardContent className="h-full flex-1 overflow-scroll px-0">
              <RecentTransactionList />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="h-full">
          <Card className="h-full pb-2">
            <CardHeader className="flex-row justify-between p-6 align-top">
              <div className="space-y-1.5">
                <CardTitle className="text-lg">
                  Create a new Transactions
                </CardTitle>
                <CardDescription>
                  Enter the details of your new transaction.
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollPrev()}
              >
                <XIcon />
              </Button>
            </CardHeader>
            <CardContent className="">
              <RecentTransactionForm onSucess={() => api?.scrollPrev()} />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export function RecentTransactionsCardSkeleton() {
  return <div>Loading that thing</div>;
}
