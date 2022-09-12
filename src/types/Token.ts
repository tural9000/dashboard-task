export default interface IToken {
  token_id: number;
  token_company: string;
  token_content: string;
}

export interface IFilter {
  page: number;
  limit?: number;
  q: string;
}