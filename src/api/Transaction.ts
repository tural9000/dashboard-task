import ITransaction from "../types/Transaction";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getTransactions = (): Promise<ITransaction[]> => {
  return api.get("/transactions" ).then((res: AxiosResponse) => res.data);
};

export const postTransaction = (data: ITransaction[]) => {
  return api.post("/transactions", data).then((res: AxiosResponse) => res.data);
};