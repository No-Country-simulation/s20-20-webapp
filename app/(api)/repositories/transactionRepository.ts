import { prisma } from "@/app/libs/prisma";
// import { transaction } from "@prisma/client";
import { ITransactionRequest } from "../types/transaction";

export class TransactionRepository {
  async saveTransaction(data: ITransactionRequest) {
    return await prisma.transaction.create({ data: data });
  }
}
