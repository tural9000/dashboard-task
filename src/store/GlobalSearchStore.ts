import { observable, action, makeAutoObservable, reaction } from "mobx";
import { IGlobalSearch } from "../types/GlobalSearch";
import { getUsers } from "../api/User";

export class GlobalSearchStore {
  @observable isloading: boolean = false;
  @observable searchs: IGlobalSearch = {
    q: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setSearch(search: Partial<IGlobalSearch>) {
    this.searchs = { ...this.searchs, ...search };
  }
}