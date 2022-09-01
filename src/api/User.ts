import IUser from "../types/User";
import { AxiosResponse } from "axios";
import api from "../config/ApiConfig";

export const getUsers = (): Promise<IUser[]> => {
  return api.get("/users" ).then((res: AxiosResponse) => res.data);
};

export const postUsers = (data: IUser[]) => {
  return api.post("/users", data).then((res: AxiosResponse) => res.data);
};