export const exchangeRates = {
  EUR: {
    NOK: 11.68, // 1 EUR = 11.68 NOK
  },
  NOK: {
    EUR: 0.085, // 1 NOK = 0.085 EUR
  },
};

export type Currency = keyof typeof exchangeRates;

export const currencies: Currency[] = Object.keys(exchangeRates) as Currency[];

export function convert(amount: number, from: Currency, to: Currency): number {
  const rate = exchangeRates[from] as Record<Currency, number>;
  if (rate && rate[to]) {
    return rate[to] * amount;
  } else {
    return amount;
  }
}
