"use client";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InsertBankAccountSchema } from "@/db/schema";
import { AmountFormField } from "@/components/amount/amount-form-field";
import { SubmitButton } from "@/components/submit-button";
import { useAction } from "next-safe-action/hooks";
import { createBankAccount } from "@/db/actions";

export function BankAccountForm() {
  const form = useForm<z.infer<typeof InsertBankAccountSchema>>({
    resolver: zodResolver(InsertBankAccountSchema),
    defaultValues: {
      name: "",
      balance: 0,
      currency: "EUR",
      interestRate: 0,
    },
  });

  const { execute, status, reset } = useAction(createBankAccount, {
    onSettled: () => {
      setTimeout(() => {
        form.reset();
        reset();
      }, 2000);
    },
  });

  function onSubmit(values: z.infer<typeof InsertBankAccountSchema>) {
    execute(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Account name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <AmountFormField control={form.control} amountName="balance" />
          <FormField
            control={form.control}
            name="interestRate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-2 focus-visible:border-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Interest rate"
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? 0 : value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SubmitButton
          state={status}
          idleContent="Add account"
          successContent="Account added"
        />
      </form>
    </Form>
  );
}
