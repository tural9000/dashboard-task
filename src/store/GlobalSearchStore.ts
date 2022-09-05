import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getTokens } from "../api/Token";
import { getTransactions } from "../api/Transaction";
import { getUsers } from "../api/User";
import { IGlobalSearch } from "../types/GlobalSearch";
import IToken from "../types/Token";
import ITransaction from "../types/Transaction";
import IUser from "../types/User";

export class GlobalSearchStore {
  @observable users: IUser[] = [];
  @observable transactions: ITransaction[] = [];
  @observable tokens: IToken[] = [];
  @observable count: number = 0;
  @observable isloading: boolean = false;
  @observable search: IGlobalSearch = {
    page: 1,
    limit: 10,
    q: "",
  };

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => [this.search],
      () => this.loadSearch()
    );
  }

  @action
  loadSearch = () => {
    this.isloading = true;

    Promise.all([getUsers(this.search),  getTransactions(this.search), getTokens(this.search)]).then(([users, transactions, tokens]) => {
        this.users = users.data;
        this.transactions = transactions.data
        this.tokens = tokens.data
        this.count = users.count + transactions.count + tokens.count;
    }).finally(() => {
        this.isloading = false;
    })
  };

  @action
  setSearch(search: Partial<IGlobalSearch>) {
    this.search = { ...this.search, ...search };
  }
}