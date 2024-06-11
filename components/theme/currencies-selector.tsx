// "use server";

// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { auth } from "@clerk/nextjs/server";
// import { PlusIcon } from "@radix-ui/react-icons";

// export async function CurrenciesSelector() {
//   const { userId } = auth();

//   if (!userId) {
//     return null;
//   }

//   const currencies = await getUserCurrencies(userId);

//   if (!currencies || !currencies.length) {
//     return (
//       <RadioGroup>
//         <RadioGroupItem value="new-currency" id="new-currency">
//           <PlusIcon />
//         </RadioGroupItem>
//       </RadioGroup>
//     );
//   }

//   return (
//     <RadioGroup
//       onValueChange={() => {}}
//       defaultValue={currencies[0].id.toString()}
//     >
//       {currencies.map((currency) => (
//         <RadioGroupItem
//           value={currency.id.toString()}
//           id={currency.id.toString()}
//           key={currency.id}
        
//           {currency.code}
//         </RadioGroupItem>
//       ))}
//       <RadioGroupItem value="new-currency" id="new-currency">
//         <PlusIcon />
//       </RadioGroupItem>
//     </RadioGroup>
//   );
// }
