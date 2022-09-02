import { configure, makeAutoObservable } from "mobx";
import { UsersStore } from "./UserStore";
import { TransactionsStore } from "./TransactionStore";
import { TokensStore } from "./TokenStore";

configure({
  enforceActions: "never"
})

export default class RootStore {
  usersStore: UsersStore;
  transactionsStore: TransactionsStore;
  tokensStore: TokensStore;

  constructor() {
    makeAutoObservable(this);
    
    this.usersStore = new UsersStore();
    this.usersStore.loadUsers();

    this.transactionsStore = new TransactionsStore();
    this.transactionsStore.loadTransactions();

    this.tokensStore = new TokensStore();
    this.tokensStore.loadTokens();
  }
}