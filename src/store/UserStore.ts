import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getUsers, postUsers } from "../api/User";
import IUser, { IFilter } from "../types/User";

export class UsersStore {
  @observable users: IUser[] = [];
  @observable datas: IUser[] = [];
  @observable count: number = 0;
  @observable isloading: boolean = false;
  @observable filter: IFilter = {
    page: 1,
    limit: 10,
    q: ""
  };
  @observable activeUserId: number = -1
  
  constructor() {
    makeAutoObservable(this);
    reaction(() => [this.filter], () => this.loadUsers())
  }

  @action
  loadUsers = () => {
    this.isloading = true;
    getUsers(this.filter).then(({data, count}) => {
      this.users = data;
      this.count = count;
    }).finally(() => (this.isloading = false));
  };

  @action
  setActiveUser = (id: number) => {
    this.activeUserId = id
  }

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

  get activeUser()  {
    return this.users.find(user => user.id === this.activeUserId)
  }
}