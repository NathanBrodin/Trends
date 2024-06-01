"use client";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/use-config";
import { useState } from "react";
import { AnimatedState } from "@/components/animate-state";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { AmountFormField } from "@/components/amount/amount-form-field";

const formSchema = z.object({
  name: z.string({ message: "A transaction name is required" }),
  amount: z.number({ message: "Cannot create a empty transaction" }),
  currency: z.string(),
  date: z.date(),
  bankId: z.string(),
  categoryId: z.string(),
});

export function RecentTransactionForm({ onSucess }: { onSucess: () => void }) {
  const [config] = useConfig();

  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      currency: config.currency,
      date: new Date(),
      bankId: "",
      categoryId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });

    if (formState === "success") return;

    setFormState("loading");

    setTimeout(() => {
      setFormState("success");
    }, 1750);

    setTimeout(() => {
      onSucess();
      form.reset();
      setFormState("idle");
    }, 2500);
  }

  const submitButtonContent = {
    idle: "Create new transaction",
    loading: (
      <div className="flex items-center">
        <Loader2 className="mr-2 size-4 animate-spin" />
        Please wait
      </div>
    ),
    success: "Transaction created!",
    error: "Sorry, unsuccessful request",
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Transaction Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <AmountFormField control={form.control} />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="bankId"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs">Bank</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <RadioGroupItem value="sumeria" id="sumeria">
                    Sumeria
                  </RadioGroupItem>
                  <RadioGroupItem value="credit-agricole" id="credit-agricole">
                    Crédit Agricole
                  </RadioGroupItem>
                  <RadioGroupItem value="dnb" id="dnb">
                    DNB
                  </RadioGroupItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs">Category</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <RadioGroupItem value="house-rent" id="house-rent">
                    House Rent
                  </RadioGroupItem>
                  <RadioGroupItem value="food" id="food">
                    Food
                  </RadioGroupItem>
                  <RadioGroupItem value="transport" id="transport">
                    Transport
                  </RadioGroupItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={formState === "loading"}
          variant={formState === "error" ? "destructive" : "default"}
        >
          <AnimatedState>{submitButtonContent[formState]}</AnimatedState>
        </Button>
      </form>
    </Form>
  );
}
