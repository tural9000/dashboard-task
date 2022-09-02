import IToken, {IFilter} from "../types/Token";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getTokens = ({page, limit = 10}: IFilter): Promise<{count: number, data: IToken[]}> => {
  return api.get("/apitokens", {
    params: {
      _page: page,
      _limit: limit
    }
  }).then((res: AxiosResponse) => ({data: res.data,count: parseInt(res.headers['x-total-count']) }));
};


export const postTokens = (data: IToken[]) => {
  return api.post("/apitokens", data).then((res: AxiosResponse) => res.data);
};