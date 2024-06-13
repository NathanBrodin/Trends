"use server";

import { eq } from "drizzle-orm";
import { db } from "./index";
import {
  InsertBankAccount,
  InsertBankAccountSchema,
  SelectBankAccount,
  bankAccounts,
} from "./schema";
import { auth } from "@clerk/nextjs/server";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";

const actionClient = createSafeActionClient();

export const createBankAccount = actionClient
  .schema(InsertBankAccountSchema)
  .action(async ({ parsedInput }) => {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const newBankAccount: InsertBankAccount = {
      ...parsedInput,
      userId: user.userId,
    };

    await db.insert(bankAccounts).values(newBankAccount);

    revalidatePath("/accounts");
    return {
      success: "Successfully created bank account",
    };
  });

export async function getBankAccounts(): Promise<SelectBankAccount[]> {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return db
    .select()
    .from(bankAccounts)
    .where(eq(bankAccounts.userId, user.userId));
}
