"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, XIcon } from "lucide-react";
import { CarouselProps } from "./recent-transactions-card";
import { AmountInput } from "@/components/amount/amount-input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { AnimatedState } from "@/components/animate-state";

export default function CreateRecentTransactionCard({
  handleCarouselChange,
}: CarouselProps) {
  const [date, setDate] = useState<Date>();
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle",
  );

  const submitButtonContent = {
    idle: "Create new transaction",
    loading: (
      <div className="flex items-center">
        <Loader2 className="mr-2 size-4 animate-spin" />
        Please wait
      </div>
    ),
    success: "Transaction created!",
  };

  return (
    <Card className="pb-2 h-full">
      <CardHeader className="flex-row justify-between align-top p-6">
        <div className="space-y-1.5">
          <CardTitle className="text-lg">Create a new Transactions</CardTitle>
          <CardDescription>
            Just spent some money? appoint it here.
          </CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleCarouselChange}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardContent className="px-0 flex-1 h-full overflow-scroll p-6 flex flex-col gap-4">
        <AmountInput />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button
          disabled={formState === "loading"}
          onClick={() => {
            if (formState === "success") return;

            setFormState("loading");

            setTimeout(() => {
              setFormState("success");
            }, 1750);

            setTimeout(() => {
              handleCarouselChange();
              setFormState("idle");
            }, 2500);
          }}
        >
          <AnimatedState>{submitButtonContent[formState]}</AnimatedState>
        </Button>
      </CardContent>
    </Card>
  );
}
