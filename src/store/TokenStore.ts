import { observable, action, makeAutoObservable, reaction } from "mobx";
import { getTokens, postTokens } from "../api/Token";
import IToken from "../types/Token";

export class TokensStore {
  @observable tokens: IToken[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  loadTokens = () => {
    getTokens().then((tokens) => {
      this.tokens = tokens;
    });
  };

  @action
  saveTokens = () => {
    postTokens(this.tokens);
  };

  @action
  addToken = (token: IToken) => {
    this.tokens.push(token);
  };
}