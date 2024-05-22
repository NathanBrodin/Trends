import { Home, LucideIcon, UtensilsCrossed } from "lucide-react";

export const categories = [
  {
    name: "House",
    icon: Home,
    color: "#eb4034",
  },
  {
    name: "Food",
    icon: UtensilsCrossed,
    color: "#33333",
  },
] as const;

export type Category = {
  name: string;
  icon: LucideIcon;
  color?: string;
};
