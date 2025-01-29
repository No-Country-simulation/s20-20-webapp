import { prisma } from "@/app/libs/prisma";
import { ICard } from "../types/card";

export class CardRepository {
  async findByAccountNumber(targetAccount: string) {
    //Primero buscamos por el numero de cuenta por lo tanto el objeto que se devuelve en el await
    //es de tipo cardInfo e incluye dento a la entidad card
    const cardInfo = await prisma.cardInfo.findUnique({
      where: { accountNumber: targetAccount },
      include: { card: true },
    });
    if (!cardInfo) return null;

    const result: ICard = {
      cardId: cardInfo.card?.id || "",
      userId: cardInfo.card?.userId || "",
      cardInfoId: cardInfo.id,
      accountNumber: cardInfo.accountNumber,
      cardType: cardInfo.cardType,
      expirationData: cardInfo.expirationDate,
      issuerBank: cardInfo.issuerBank,
      balance: cardInfo.balance,
    };
    return result;
  }

  async findById(cardId: string) {
    //Aquí buscamos por id por lo tanto la entidad principal es Card e incluye a CardInfo
    const card = await prisma.card.findUnique({
      where: { id: cardId },
      include: { cardInfo: true },
    });
    if (!card) return null;
    const result: ICard = {
      cardId: card.id,
      userId: card.userId,
      cardInfoId: card.cardInfo.id,
      accountNumber: card.cardInfo.accountNumber,
      cardType: card.cardInfo.cardType,
      expirationData: card.cardInfo.expirationDate,
      issuerBank: card.cardInfo.issuerBank,
      balance: card.cardInfo.balance,
    };
    return result;
  }

  async updateBalance(cardInfoId: number, newBalance: number) {
    return prisma.cardInfo.update({
      where: { id: cardInfoId },
      data: { balance: newBalance },
    });
  }

  async listCardsByUser(userId: string) {
    const cards = await prisma.card.findMany({
      where: { userId: userId },
      include: { cardInfo: true },
    });
    const result: ICard[] = cards.map((card) => ({
      cardId: card.id,
      userId: card.userId,
      cardInfoId: card.cardInfo.id,
      accountNumber: card.cardInfo.accountNumber,
      cardType: card.cardInfo.cardType,
      expirationData: card.cardInfo.expirationDate,
      issuerBank: card.cardInfo.issuerBank,
      balance: card.cardInfo.balance,
    }));
    return result;
  }
}
