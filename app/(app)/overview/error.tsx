"use client";

import { AmountCardError } from "@/components/amount-card";
import {
  HandCoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: (
        <ToastAction altText="Try again" onClick={() => reset()}>
          Try again
        </ToastAction>
      ),
    });
  }, [error, toast, reset]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 sm:p-8">
      <AmountCardError title="Balance" icon={LandmarkIcon} />
      <AmountCardError title="Income" icon={HandCoinsIcon} />
      <AmountCardError title="Expenses" icon={ReceiptTextIcon} />
      <AmountCardError title="Saving Estimate" icon={PiggyBankIcon} />
    </div>
  );
}
