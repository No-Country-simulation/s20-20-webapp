export interface ITransactionRequest {
  amount: number;
  description: string?;
  status: boolean;
  cardId: string;
  targetAccount: string;
  legalPersonId: number;
}

export interface ITransaction {
  // originAccountNumber: string;
  transactionId: string;
  originCardId: string;
  amount: number;
  targetAccount: string;
  description: string;
  author: boolean;
  date: Date;
}
