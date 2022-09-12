import IUser, { IFilter } from "../types/User";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getUsers = ({page, limit = 50,q}: IFilter | any): Promise<{count: number, data: IUser[]}> => {
  return api.get("/users", {
    params: {
      _page: page,
      _limit: limit,
      q:q
    }
  }).then((res: AxiosResponse) => ({data: res.data,count: parseInt(res.headers['x-total-count']) }));
};

export const getUser = (id: string): Promise<IUser> => {
  return api.get(`/users/${id}`,).then((res: AxiosResponse) => (res.data))
};

export const postUsers = (data: IUser[]) => {
  return api.post("/users", data).then((res: AxiosResponse) => res.data);
};

export const putUser = (data: any) => {
  
  return api.put(`/users/${data.id}`, data).then((res: AxiosResponse) => res.data);
};