export interface ICard {
  cardId: string;
  userId: string;
  cardInfoId: number;
  accountNumber: string;
  cardType: string;
  expirationData: Date;
  issuerBank: string;
  balance: number;
}
