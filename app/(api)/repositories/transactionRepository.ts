import { prisma } from "@/app/libs/prisma";
// import { transaction } from "@prisma/client";
import { ITransaction, ITransactionRequest } from "../types/transaction";

export class TransactionRepository {
  async saveTransaction(data: ITransactionRequest) {
    return await prisma.transaction.create({ data: data });
  }

  async listTransactionsByUserCard(cardId: string) {
    const card = await prisma.card.findUnique({
      where: { id: cardId },
      include: { cardInfo: true },
    });
    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { cardId: cardId },
          { targetAccount: card?.cardInfo.accountNumber },
        ],
      },
    });

    const result: ITransaction[] = transactions.map((transaction) => {
      const author = transaction.cardId === card?.id;
      return {
        transactionId: transaction.id,
        originCardId: transaction.cardId,
        amount: transaction.amount,
        targetAccount: transaction.targetAccount || "",
        description: transaction.description || "",
        date: transaction.createAt,
        author: author,
      };
    });
    return result;
  }
}
