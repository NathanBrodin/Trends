DO $$ BEGIN
 CREATE TYPE "public"."currency" AS ENUM('NOK', 'EUR', 'USD');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trends_bank_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"amount" real DEFAULT 0,
	"currency" "currency" NOT NULL,
	"interest_rate" real DEFAULT 0,
	"user_id" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trends_incomes" (
	"id" serial PRIMARY KEY NOT NULL,
	"hourly" real DEFAULT 0,
	"monthly" real DEFAULT 0,
	"yearly" real DEFAULT 0,
	"hours_per_week" integer DEFAULT 35,
	"currency" "currency" NOT NULL,
	"tax_rate" real DEFAULT 0,
	"user_id" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trends_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real DEFAULT 0 NOT NULL,
	"currency" "currency" NOT NULL,
	"bank_account_id" integer,
	"date" timestamp DEFAULT now() NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trends_transactions" ADD CONSTRAINT "trends_transactions_bank_account_id_trends_bank_accounts_id_fk" FOREIGN KEY ("bank_account_id") REFERENCES "public"."trends_bank_accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
