export const categories = [
  "House",
  "Food",
  "Student Loan",
  "Transport",
] as const;

export type Category = (typeof categories)[number];
