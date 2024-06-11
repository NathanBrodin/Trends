ALTER TABLE "trends_incomes" ADD COLUMN "bank_account_id" integer;--> statement-breakpoint
ALTER TABLE "trends_incomes" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "trends_incomes" ADD COLUMN "updated_at" timestamp NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trends_incomes" ADD CONSTRAINT "trends_incomes_bank_account_id_trends_bank_accounts_id_fk" FOREIGN KEY ("bank_account_id") REFERENCES "public"."trends_bank_accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "trends_bank_accounts" ADD CONSTRAINT "trends_bank_accounts_user_id_name_unique" UNIQUE("user_id","name");