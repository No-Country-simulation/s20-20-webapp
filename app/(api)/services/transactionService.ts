import { TransactionRepository } from "../repositories/transactionRepository";
import { ITransactionRequest } from "../types/transaction";
import { HttpResponse } from "../utils/httpResponse";
import { CardRepository } from "./../repositories/cardRepository";
import { validateBalanceOnTheCard } from "../validators/transactionValidator";
import { prisma } from "@/app/libs/prisma";

export class TransactionService {
  private readonly transactionRepository = new TransactionRepository();
  private readonly cardRepository = new CardRepository();
  private readonly httpResponse = new HttpResponse();

  async saveTransaction(data: ITransactionRequest) {
    try {
      const [targetCard, originCard] = await Promise.all([
        data.withdraw
          ? null
          : this.cardRepository.findByAccountNumber(data.targetAccount),
        this.cardRepository.findById(data.cardId),
      ]);

      if (!originCard)
        return this.httpResponse.BadRequest("La cuenta de origen no existe.");
      if (!targetCard && !data.withdraw)
        return this.httpResponse.NotFound("La cuenta destino no existe.");
      if (!validateBalanceOnTheCard(data.amount, originCard))
        return this.httpResponse.BadRequest(
          "No hay saldo suficiente para realizar esta operación."
        );

      await prisma.$transaction(async () => {
        await this.transactionRepository.saveTransaction(data);
        await this.cardRepository.updateBalance(
          originCard.cardInfoId,
          originCard.balance - data.amount
        );

        if (targetCard && !data.withdraw) {
          await this.cardRepository.updateBalance(
            targetCard.cardInfoId,
            targetCard.balance + data.amount
          );
        }
      });

      return this.httpResponse.Ok("Se realizó correctamente la transferencia.");
    } catch (error) {
      //   console.error("Error en AuthService login:", error);
      //   return null; // Error interno
      return this.httpResponse.InternalServerError(error);
    }
  }

  async listTransactionByUserCard(cardId: string) {
    try {
      const transactions =
        await this.transactionRepository.listTransactionsByUserCard(cardId);
      if (!transactions || transactions.length <= 0)
        return this.httpResponse.NotFound(
          "No se encontraron transacciones realizadas con esta tarjeta"
        );
      return this.httpResponse.Ok(transactions);
    } catch (error) {
      return this.httpResponse.InternalServerError(error);
    }
  }
}
