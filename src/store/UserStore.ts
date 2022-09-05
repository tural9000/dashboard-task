import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getUsers, postUsers } from "../api/User";
import IUser, { IFilter } from "../types/User";

export class UsersStore {
  @observable users: IUser[] = [];
  @observable datas: IUser[] = [];
  @observable count: number = 0;
  @observable isloading: boolean = false;
  @observable filters: IFilter = {
    page: 1,
    limit: 10,
    q: "",
  };

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => [this.filters],
      () => this.loadUsers()
    );
  }
  
  @action
  loadUsers = () => {
    this.isloading = true;
    getUsers(this.filters)
      .then(({ data, count }) => {
        this.users = data;
        this.count = count;
      })
      .finally(() => (this.isloading = false));
  };

  @action
  setFilter(filter: Partial<IFilter>) {
    this.filters = { ...this.filters, ...filter };
  }

  @action
  saveUsers = () => {
    postUsers(this.users);
  };

  @action
  addUser = (user: IUser) => {
    this.users.push(user);
  };
}