"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.number({ message: "Cannot create a empty transaction" }),
  currency: z.string(),
  frequency: z.string(), // Hourly, monthly, yearly
  tax: z.number(),
  hoursPerWeek: z.number(),
});

export function IncomeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
}
