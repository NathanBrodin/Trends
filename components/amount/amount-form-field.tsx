import { ChevronDown } from "lucide-react";
import { Trigger } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useConfig } from "@/hooks/use-config";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

type AmountFormFieldProps = {
  control: any;
  amountName?: string;
  currencyName?: string;
  placeholder?: string;
};

export function AmountFormField({
  control,
  amountName = "amount",
  currencyName = "currency",
  placeholder = "Amount",
}: AmountFormFieldProps) {
  const [config] = useConfig();

  return (
    <div className="flex h-10 w-full items-center overflow-hidden rounded-md border border-input text-sm focus-within:border-2 focus-within:border-ring">
      <FormField
        control={control}
        name={amountName}
        render={({ field }) => (
          <FormItem className="h-full w-full space-y-0">
            <FormControl>
              <input
                className="h-full w-full px-2 py-1 placeholder:text-muted-foreground focus:outline-0"
                placeholder={placeholder}
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
      <FormField
        control={control}
        name={currencyName}
        render={({ field }) => (
          <FormItem className="h-full space-y-0">
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={config.currency}
              >
                <Trigger className="flex h-full items-center gap-2 border-l bg-muted px-2 pl-4 text-muted-foreground">
                  <SelectValue placeholder={config.currency} />
                  <ChevronDown className="size-4" />
                </Trigger>
                <SelectContent align="end">
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="NOK">NOK</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
