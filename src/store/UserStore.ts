import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getUsers, postUsers } from "../api/User";
import IUser, { IFilter } from "../types/User";

export class UsersStore {
  @observable users: IUser[] = [];
  @observable count: number = 0;
  @observable filter: IFilter = {
    page: 1,
    limit: 10,
  };
  
  constructor() {
    makeAutoObservable(this);
    reaction(() => [this.filter], () => this.loadUsers())
  }

  @action
  loadUsers = () => {
    getUsers(this.filter).then((users) => {
      this.users = users;
    });
  };

  @action
  setFilter(filter: Partial<IFilter>) {
    this.filter = { ...this.filter, ...filter };
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