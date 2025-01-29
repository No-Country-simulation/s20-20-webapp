export interface ITransactionRequest {
  amount: number;
  description: string?;
  status: boolean;
  cardId: string;
  targetAccount: string;
  legalPersonId: number;
}
