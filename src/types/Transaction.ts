export default interface ITransaction {
  transaction_id: number;
  transaction_name: string;
  transaction_type: string;
  transaction_sender: string;
  transaction_recipient: string;
  transaction_status: boolean;
}

export interface IFilter {
  page: number;
  limit?: number;
  q: string;
}