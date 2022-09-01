import { createContext, ReactNode, ReactElement, useContext } from "react";
import RootStore from "./store";

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = {
  store: RootStore;
  children: ReactNode;
};

export const StoreProvider = ({ children, store }: StoreComponent): ReactElement => {
  return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStores = (): RootStore => useContext(StoreContext);