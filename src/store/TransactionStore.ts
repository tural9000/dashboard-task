import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getTransactions, postTransaction } from "../api/Transaction";
import ITransaction from "../types/Transaction";

export class TransactionsStore {
  @observable transactions: ITransaction[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  loadTransactions = () => {
    getTransactions().then((transactions) => {
      this.transactions = transactions;
    });
  };

  @action
  saveTransactions = () => {
    postTransaction(this.transactions);
  };

  @action
  addTransaction = (transaction: ITransaction) => {
    this.transactions.push(transaction);
  };
}