import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XIcon } from "lucide-react";

export default function CreateRecentTransactionCard({
  handleCarouselChange,
}: {
  handleCarouselChange: () => void;
}) {
  return (
    <Card className="pb-2 h-full">
      <CardHeader className="flex-row justify-between align-top p-6">
        <div className="space-y-1.5">
          <CardTitle className="text-lg">Create new Transactions</CardTitle>
          <CardDescription>Stuff.</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleCarouselChange}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardContent className="px-0 flex-1 h-full overflow-scroll">
        Make a new one
      </CardContent>
    </Card>
  );
}
