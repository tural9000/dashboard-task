import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getUsers, postUsers } from "../api/User";
import  IUser from '../types/User'

export class UsersStore {
  @observable users: IUser[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  loadUsers = () => {
    getUsers().then((users) => {
        this.users = users;
      })
  };

  @action
  saveUsers = () => {
    postUsers(this.users);
  };

  @action
  addUser = (user: IUser) => {
    this.users.push(user);
  };
}