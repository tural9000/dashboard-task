import ITransaction, { IFilter } from "../types/Transaction";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getTransactions = ({page, limit = 10}: IFilter): Promise<{count: number, data: ITransaction[]}> => {
  return api.get("/transactions", {
    params: {
      _page: page,
      _limit: limit
    }
  }).then((res: AxiosResponse) => ({data: res.data,count: parseInt(res.headers['x-total-count']) }));
};


export const postTransaction = (data: ITransaction[]) => {
  return api.post("/transactions", data).then((res: AxiosResponse) => res.data);
};