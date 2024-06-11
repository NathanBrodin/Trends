"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { z } from 'zod';
 
const CurrencySchema = z.object({
  id: z.string(),
  code: z.string().max(3),
  userId: z.string(),
});
 
export const CreateCurrencySchema = CurrencySchema.omit({ id: true, userId: true });

export async function createCurrency(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in");
  }

  const {
    code,
    } = CreateCurrencySchema.parse({
    code: formData.get("code"),
  });

  const currency = await prisma.currency.create({
    data: {
      code,
      userId,
    },
  });

  return currency;
}
