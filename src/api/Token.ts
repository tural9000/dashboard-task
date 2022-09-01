import IToken from "../types/Token";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getTokens = (): Promise<IToken[]> => {
  return api.get("/apitokens" ).then((res: AxiosResponse) => res.data);
};

export const postTokens = (data: IToken[]) => {
  return api.post("/apitokens", data).then((res: AxiosResponse) => res.data);
};