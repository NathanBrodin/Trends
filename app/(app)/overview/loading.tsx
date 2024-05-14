import { AmountCardSkeleton } from "@/components/amount-card";
import {
  HandCoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
} from "lucide-react";

export default function OverviewLoading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 sm:p-8 ">
      <AmountCardSkeleton title="Balance" icon={LandmarkIcon} />
      <AmountCardSkeleton title="Income" icon={HandCoinsIcon} />
      <AmountCardSkeleton title="Expenses" icon={ReceiptTextIcon} />
      <AmountCardSkeleton title="Saving Estimate" icon={PiggyBankIcon} />
    </div>
  );
}
