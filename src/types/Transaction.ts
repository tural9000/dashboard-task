export default interface ITransaction {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface IFilter {
  page: number;
  limit?: number;
  q: string;
}