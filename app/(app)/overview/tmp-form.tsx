"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCurrency, CreateCurrencySchema } from "@/app/actions";

export function TmpForm() {
  const form = useForm<z.infer<typeof CreateCurrencySchema>>({
    resolver: zodResolver(CreateCurrencySchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof CreateCurrencySchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action={createCurrency}
        className="grid gap-4"
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency code</FormLabel>
              <FormControl>
                <Input placeholder="EUR" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="btn">
          Create currency
        </button>
      </form>
    </Form>
  );
}
