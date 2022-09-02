import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getTokens, postTokens } from "../api/Token";
import IToken, { IFilter } from "../types/Token";

export class TokensStore {
  @observable tokens: IToken[] = [];
  @observable datas: IToken[] = [];
  @observable count: number = 0;
  @observable isloading: boolean = false;
  @observable filters: IFilter = {
    page: 1,
    limit: 10,
    q: ''
  };

  constructor() {
    makeAutoObservable(this);
    reaction(() => [this.filters], () => this.loadTokens())
  }

  @action
  loadTokens = () => {
    this.isloading = true;
    getTokens(this.filters).then(({data, count}) => {
      this.tokens = data;
      this.count = count;
    }).finally(() => (this.isloading = false));
  };
  
  @action
  setFilter(filter: Partial<IFilter>) {
    this.filters = { ...this.filters, ...filter };
  }

  @action
  saveTokens = () => {
    postTokens(this.tokens);
  };

  @action
  addToken = (token: IToken) => {
    this.tokens.push(token);
  };
}