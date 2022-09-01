export default interface IToken {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface IFilter {
  page: number;
  limit?: number;
}