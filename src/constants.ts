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
    title: "ID User",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
];

export const columnsTransaction = [
  {
    title: "transaction_id",
    dataIndex: "transaction_id",
    key: "transaction_id",
  },
  {
    title: "transaction_name",
    dataIndex: "transaction_name",
    key: "transaction_name",
  },
  {
    title: "transaction_type",
    dataIndex: "transaction_type",
    key: "transaction_type",
  },
  {
    title: "transaction_sender",
    dataIndex: "transaction_sender",
    key: "transaction_sender",
  },
  {
    title: "transaction_recipient",
    dataIndex: "transaction_recipient",
    key: "transaction_recipient",
  },
  {
    title: "transaction_status",
    dataIndex: "transaction_status",
    key: "transaction_status",
    render: (cell: string, record: any) => {
      return `${!record.transaction_status ? "Uğursuz" : "Uğurlu"}`;
    },
  },
];

export const columnsToken = [
  {
    title: "ID Token",
    dataIndex: "token_id",
    key: "token_id",
  },
  {
    title: "Company",
    dataIndex: "token_company",
    key: "token_company",
  },
  {
    title: "Token",
    dataIndex: "token_content",
    key: "token_content",
  },
];