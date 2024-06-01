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
    <div className="flex items-center h-10 text-sm w-full rounded-md border border-input overflow-hidden focus-within:border-2 focus-within:border-ring">
      <FormField
        control={control}
        name={amountName}
        render={({ field }) => (
          <FormItem className="space-y-0 w-full h-full">
            <FormControl>
              <input
                className="h-full w-full px-2 py-1 focus:outline-0 placeholder:text-muted-foreground"
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
          <FormItem className="space-y-0 h-full">
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={config.currency}
              >
                <Trigger className="h-full bg-muted text-muted-foreground flex gap-2 items-center px-2 pl-4 border-l">
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
