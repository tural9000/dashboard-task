import { Table } from "antd";
import { useStores } from "../store/useStore";

const columnsTransaction = [
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

const Transactions = () => {
  const { transactionsStore } = useStores();

  return (
    <div className="page-div">
      <Table columns={columnsTransaction} dataSource={transactionsStore.transactions} />
    </div>
  );
};

export default Transactions;