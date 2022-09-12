export default interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
}

export interface IFilter {
  page: number;
  limit?: number;
  q: string;
}