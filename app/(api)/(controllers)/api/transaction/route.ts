import { TransactionService } from "@/app/(api)/services/transactionService";
import { ITransactionRequest } from "@/app/(api)/types/transaction";
import { NextRequest } from "next/server";

const transactionService = new TransactionService();
export const POST = async (req: NextRequest) => {
  const data: ITransactionRequest = await req.json();
  return await transactionService.saveTransaction(data);
};
