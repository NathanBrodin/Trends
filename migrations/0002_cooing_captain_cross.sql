ALTER TABLE "trends_bank_accounts" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "trends_incomes" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "trends_transactions" ALTER COLUMN "updated_at" SET DEFAULT now();