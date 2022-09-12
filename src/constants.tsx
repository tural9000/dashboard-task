import { ColumnsType } from "antd/lib/table";
import IUser from "./types/User";
import styl from "./views/UserDetails.module.scss";

// Routes
export const usersLoc = "/users";
export const transactionsLoc = "/transactions";
export const tokensLoc = "/tokens";

// Table titles
export const userTitleTable = "Users";
export const transactionTitleTable = "Transactions";
export const tokenTitleTable = "API Tokens";

// Table columns
export const columnsUser = [
  {
    title: "first_name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "last_name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
];

export const columnsTransaction = [
  {
    title: "first_name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "last_name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
];

export const columnsToken = [
  {
    title: "first_name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "last_name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
];