import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { AnimatedState } from "./animate-state";

type State = "idle" | "loading" | "success" | "error";

type SubmitButtonProps = {
  state: State;
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
    loading: loadingContent,
    success: successContent,
    error: errorContent,
  };

  return (
    <Button
      type="submit"
      disabled={state === "loading"}
      variant={state === "error" ? "destructive" : "default"}
    >
      <AnimatedState>{content[state]}</AnimatedState>
    </Button>
  );
}
