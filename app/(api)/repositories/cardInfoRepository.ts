import { prisma } from "@/app/libs/prisma";
import { ICard } from "../types/card";

export class CardInfoRepository {
  async saveCardInfo(data: ICard) {
    const newCardInfo = {
      accountNumber: data.accountNumber,
      cardType: data.cardType,
      expirationDate: data.expirationData,
      issuerBank: data.issuerBank,
      balance: data.balance,
    };
    return await prisma.cardInfo.create({
      data: newCardInfo,
    });
  }
}
