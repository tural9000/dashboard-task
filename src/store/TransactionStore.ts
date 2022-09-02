import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getTransactions, postTransaction } from "../api/Transaction";
import ITransaction, { IFilter } from "../types/Transaction";

export class TransactionsStore {
  @observable transactions: ITransaction[] = [];
  @observable datas: ITransaction[] = [];
  @observable count: number = 0;
  @observable isloading: boolean = false;
  @observable filter: IFilter = {
    page: 1,
    limit: 10,
  };

  constructor() {
    makeAutoObservable(this);
    reaction(() => [this.filter], () => this.loadTransactions())
  }

  @action
  loadTransactions = () => {
    this.isloading = true;
    getTransactions(this.filter).then(({data, count}) => {
      this.transactions = data;
      this.count = count;
    }).finally(() => (this.isloading = false));
  };

  @action
  setFilter(filter: Partial<IFilter>) {
    this.filter = { ...this.filter, ...filter };
  }

  @action
  saveTransactions = () => {
    postTransaction(this.transactions);
  };

  @action
  addTransaction = (transaction: ITransaction) => {
    this.transactions.push(transaction);
  };
}