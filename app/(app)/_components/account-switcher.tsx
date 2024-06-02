import { CaretSortIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface AccountSwitcherProps extends PopoverTriggerProps {}

export default async function AccountSwitcher({
  className,
}: AccountSwitcherProps) {
  const user = await currentUser();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select a team"
          className={cn("w-[200px] justify-between", className)}
        >
          <Avatar className="mr-2 size-6">
            <AvatarImage
              src={user!.imageUrl}
              alt={user!.fullName ?? "User profile image"}
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {user!.fullName}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <UserButton />
          </CommandList>
          <CommandSeparator />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
