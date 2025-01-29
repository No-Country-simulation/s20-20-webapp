import { ICard } from "../types/card";

export const validateBalanceOnTheCard = (amount: number, card: ICard) => {
  if (card.balance < 1 || amount > card.balance) return false;
  return true;
};
