import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  real,
  pgEnum,
  integer,
  unique,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const createTable = pgTableCreator((name) => `trends_${name}`);

export const currencyEnum = pgEnum("currency", ["NOK", "EUR", "USD"]);

export const bankAccounts = createTable(
  "bank_accounts",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    balance: real("balance").default(0.0),
    currency: currencyEnum("currency").notNull(),
    interestRate: real("interest_rate").default(0.0),
    userId: varchar("user_id", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => ({
    unique: unique().on(t.userId, t.name),
  }),
);

export type InsertBankAccount = typeof bankAccounts.$inferInsert;
export const InsertBankAccountSchema = createInsertSchema(bankAccounts, {
  name: z
    .string({
      required_error: "Account name is required",
    })
    .max(256),
  balance: z.number(),
  interestRate: z.number().min(0).max(100),
}).omit({
  id: true,
  userId: true,
  createdAt: true,
  updatedAt: true,
});
export type SelectBankAccount = typeof bankAccounts.$inferSelect;

export const transactions = createTable("transactions", {
  id: serial("id").primaryKey(),
  amount: real("amount").default(0.0).notNull(),
  currency: currencyEnum("currency").notNull(),
  bankAccountId: integer("bank_account_id").references(() => bankAccounts.id),
  date: timestamp("date").notNull().defaultNow(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type InsertTransaction = typeof transactions.$inferInsert;
export const insertTransactionSchema = createInsertSchema(transactions);
export type SelectTransaction = typeof transactions.$inferSelect;

export const incomes = createTable("incomes", {
  id: serial("id").primaryKey(),
  hourly: real("hourly").default(0.0),
  monthly: real("monthly").default(0.0),
  yearly: real("yearly").default(0.0),
  hoursPerWeek: integer("hours_per_week").default(35),
  currency: currencyEnum("currency").notNull(),
  taxRate: real("tax_rate").default(0.0),
  bankAccountId: integer("bank_account_id").references(() => bankAccounts.id),
  userId: varchar("user_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type InsertIncome = typeof incomes.$inferInsert;
export const insertIncomeSchema = createInsertSchema(incomes);
export type SelectIncome = typeof incomes.$inferSelect;
