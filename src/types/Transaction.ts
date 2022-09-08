export default interface ITransaction {
  id: number;
  transaction_name: string;
  transaction_status: string;
}

export interface IFilter {
  page: number;
  limit?: number;
  q: string;
}