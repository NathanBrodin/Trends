import AccountSwitcher from "./account-switcher";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="space-y-4 p-4 pt-3 sm:p-8 sm:pt-6">
      <div className="flex items-end justify-between space-y-2">
        <h2 className="font-display text-4xl font-bold tracking-tight">
          Dashboard
        </h2>
        <div className="hidden space-x-2 sm:flex">
          <AccountSwitcher />
          <ThemeCustomizer />
        </div>
        <div className="visible sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-y-4 px-4 py-8">
              <div className="flex items-center gap-x-2">
                <span className="text-sm font-semibold">Change Account:</span>
                <AccountSwitcher />
              </div>
              <Separator />
              <div className="flex items-center gap-x-2">
                <span className="text-sm font-semibold">Customize theme:</span>
                <ThemeCustomizer />
              </div>
              <Separator />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <Nav />
    </header>
  );
}
