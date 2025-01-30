import { NextRequest } from "next/server";
import { TransactionService } from "@/app/(api)/services/transactionService";

const transactionService = new TransactionService();

export const GET = async (
  res: NextRequest,
  { params }: { params: Promise<{ cardId: string }> }
) => {
  const cardId = (await params).cardId;
  return await transactionService.listTransactionByUserCard(cardId);
};
