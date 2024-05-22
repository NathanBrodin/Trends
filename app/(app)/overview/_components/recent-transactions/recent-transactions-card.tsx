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
import CreateRecentTransactionCard from "./create-recent-transaction-card";

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
          <RecentTransactionList
            handleCarouselChange={() => api?.scrollNext()}
          />
        </CarouselItem>
        <CarouselItem className="h-full">
          <CreateRecentTransactionCard
            handleCarouselChange={() => api?.scrollPrev()}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export function RecentTransactionsCardSkeleton() {
  return <div>Loading that thing</div>;
}
