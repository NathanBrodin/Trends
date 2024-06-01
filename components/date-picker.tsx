"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

type DatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value);

  function handleDateSelect(selectedDate: Date | undefined) {
    setDate(selectedDate);
    onChange(selectedDate);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-48 justify-start text-left font-normal",
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
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
