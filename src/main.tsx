import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.scss";
import "antd/dist/antd.css";
import { StoreProvider } from "./store/useStore"; 
import RootStore from "./store/store"; 

const store = new RootStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);