import { CardRepository } from "../repositories/cardRepository";
import { HttpResponse } from "../utils/httpResponse";

export class CardService {
  private readonly cardRepository = new CardRepository();
  private readonly httpResponse = new HttpResponse();

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
