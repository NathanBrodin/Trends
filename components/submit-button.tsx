import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { AnimatedState } from "./animate-state";
import { HookActionStatus } from "next-safe-action/hooks";

type SubmitButtonProps = {
  state: HookActionStatus;
  idleContent?: ReactNode;
  loadingContent?: ReactNode;
  successContent?: ReactNode;
  errorContent?: ReactNode;
};

export function SubmitButton({
  state,
  idleContent = "Submit",
  loadingContent = (
    <div className="flex items-center">
      <Loader2Icon className="mr-2 size-4 animate-spin" />
      Please wait
    </div>
  ),
  successContent = "Operation succeded!",
  errorContent = "Sorry, unsuccessful request",
}: SubmitButtonProps) {
  const content = {
    idle: idleContent,
    executing: loadingContent,
    hasSucceeded: successContent,
    hasErrored: errorContent,
  };

  return (
    <Button
      type="submit"
      disabled={state === "executing"}
      variant={state === "hasErrored" ? "destructive" : "default"}
    >
      <AnimatedState>{content[state]}</AnimatedState>
    </Button>
  );
}
