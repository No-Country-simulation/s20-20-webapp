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
      const targetCard = await this.cardRepository.findByAccountNumber(
        data.targetAccount
      );
      if (!targetCard)
        return this.httpResponse.NotFound("La cuenta destino no existe.");
      const originCard = await this.cardRepository.findById(data.cardId);
      if (!originCard)
        return this.httpResponse.BadRequest("La cuenta de origen no existe");
      if (!validateBalanceOnTheCard(data.amount, originCard))
        return this.httpResponse.BadRequest(
          "No hay saldo suficiente para realizar esta operación"
        );
      await prisma.$transaction(async () => {
        await this.transactionRepository.saveTransaction(data);
        const newBalanceOrigin = originCard.balance - data.amount;
        await this.cardRepository.updateBalance(
          originCard.cardInfoId,
          newBalanceOrigin
        );
        const newBalanceTarget = targetCard.balance + data.amount;
        targetCard.balance = newBalanceTarget;
        await this.cardRepository.updateBalance(
          targetCard.cardInfoId,
          newBalanceTarget
        );
      });

      return this.httpResponse.Ok("Se realizó correctamente la transferencia.");
    } catch (error) {
      //   console.error("Error en AuthService login:", error);
      //   return null; // Error interno
      return this.httpResponse.InternalServerError(error);
    }
  }
}
