"use client";

import { useConfig } from "@/hooks/use-config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Currency, currencies, convert } from "@/registry/currencies";
import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type AmountProps = {
  amount: number;
  currency: Currency;
  className?: string;
  animated?: boolean;
};

export function Amount({ amount, currency, className, animated }: AmountProps) {
  const [config] = useConfig();

  const formatedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: config.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convert(amount, currency, config.currency));

  const formattedAmounts: { currency: Currency; amount: string }[] =
    currencies.map((c) => {
      return {
        currency: c,
        amount: new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: c,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(convert(amount, currency, c)),
      };
    });

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          {animated ? (
            <AnimatedAmount
              amount={convert(amount, currency, config.currency)}
              currency={config.currency}
              className={className}
            />
          ) : (
            <span className={className}>{formatedAmount}</span>
          )}
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-end">
          {formattedAmounts.map((a) => (
            <div
              key={a.currency}
              className={cn(a.currency === currency && "font-semibold")}
            >
              {a.amount}
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AnimatedAmount({ amount, currency, className }: AmountProps) {
  let [isMounted, setIsMounted] = useState(false);
  let spring = useSpring(isMounted ? amount : 0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  let display = useTransform(spring, (current) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(current),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    spring.set(amount);
  }, [spring, amount]);

  return <motion.span className={className}>{display}</motion.span>;
}
