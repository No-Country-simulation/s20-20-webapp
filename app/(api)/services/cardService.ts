import { prisma } from "@/app/libs/prisma";
import { CardRepository } from "../repositories/cardRepository";
import { ICard } from "../types/card";
import { HttpResponse } from "../utils/httpResponse";
import { CardInfoRepository } from "../repositories/cardInfoRepository";

export class CardService {
  private readonly cardRepository = new CardRepository();
  private readonly cardInfoRepository = new CardInfoRepository();
  private readonly httpResponse = new HttpResponse();

  async saveCard(data: ICard) {
    try {
      await prisma.$transaction(async () => {
        const cardInfo = await this.cardInfoRepository.saveCardInfo(data);
        const card = {
          ...data,
          cardInfoId: cardInfo.id,
        };
        await this.cardRepository.saveCard(card);
      });
      return this.httpResponse.Ok("Se guardó correctamente la tarjeta");
    } catch (error) {
      //   console.error("Error en AuthService login:", error);
      //   return null; // Error interno
      return this.httpResponse.InternalServerError(error);
    }
  }

  async getCardById(cardId: string) {
    try {
      const card = await this.cardRepository.findById(cardId);
      if (!card)
        return this.httpResponse.NotFound("No existe la tarjeta buscada.");
      return this.httpResponse.Ok(card);
    } catch (error) {
      //   console.error("Error en AuthService login:", error);
      //   return null; // Error interno
      return this.httpResponse.InternalServerError(error);
    }
  }

  async listCardsByUser(userId: string) {
    try {
      const cards = await this.cardRepository.listCardsByUser(userId);
      if (!cards || cards.length <= 0)
        return this.httpResponse.NotFound(
          "No se encontraron tarjetas para este usuario"
        );
      return this.httpResponse.Ok(cards);
    } catch (error) {
      //   console.error("Error en AuthService login:", error);
      //   return null; // Error interno
      return this.httpResponse.InternalServerError(error);
    }
  }
}
