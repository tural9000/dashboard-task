import IUser, { IFilter } from "../types/User";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getUsers = ({page, limit = 10}: IFilter): Promise<IUser[]> => {
  return api.get("/users", {
    params: {
      _page: page,
      _limit: limit
    }
  }).then((res: AxiosResponse) => res.data);
};

export const postUsers = (data: IUser[]) => {
  return api.post("/users", data).then((res: AxiosResponse) => res.data);
};