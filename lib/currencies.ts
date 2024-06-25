import { Currency } from "@/db/schema";

export const exchangeRates = {
  EUR: {
    NOK: 11.68, // 1 EUR = 11.68 NOK
    USD: 1.18, // 1 EUR = 1.18 USD
  },
  NOK: {
    EUR: 0.085, // 1 NOK = 0.085 EUR
    USD: 0.11, // 1 NOK = 0.11 USD
  },
  USD: {
    EUR: 0.85, // 1 USD = 0.85 EUR
    NOK: 9.09, // 1 USD = 9.09 NOK
  },
};

export function convert(amount: number, from: Currency, to: Currency): number {
  const rate = exchangeRates[from] as Record<Currency, number>;
  if (rate && rate[to]) {
    return rate[to] * amount;
  } else {
    return amount;
  }
}
