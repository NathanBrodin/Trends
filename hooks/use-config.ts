import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { Theme } from "@/registry/themes";
import { Currency } from "@/db/schema";

type Config = {
  currency: Currency;
  theme: Theme["name"];
  radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
  currency: "EUR",
  theme: "stone",
  radius: 0.5,
});

export function useConfig() {
  return useAtom(configAtom);
}
