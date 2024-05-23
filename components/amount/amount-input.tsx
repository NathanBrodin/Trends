import { BanknoteIcon, ChevronDown } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function AmountInput() {
  return (
    <div className="flex items-center h-10 text-sm w-full rounded-md border border-input overflow-hidden focus-within:border-ring">
      <BanknoteIcon className="ml-4 size-6 text-muted-foreground" />
      <input
        className="h-full w-full px-2 py-1 focus:outline-0 placeholder:text-muted-foreground"
        placeholder="Amount"
        type="number"
      />
      <Select>
        <SelectPrimitive.Trigger className="h-full bg-muted text-muted-foreground flex gap-2 items-center px-2 pl-4 border-l">
          <SelectValue placeholder="EUR" />
          <ChevronDown className="size-4" />
        </SelectPrimitive.Trigger>
        <SelectContent align="end">
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="NOK">NOK</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
