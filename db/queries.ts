import { eq } from "drizzle-orm";
import { db } from "./index";
import { InsertBankAccount, SelectBankAccount, bankAccounts } from "./schema";

export async function createBankAccount(data: InsertBankAccount) {
  await db.insert(bankAccounts).values(data);
}

export async function getBankAccountsByUserId(
  id: SelectBankAccount["userId"],
): Promise<SelectBankAccount> {
  return db.select().from(bankAccounts).where(eq(bankAccounts.userId, id));
}
