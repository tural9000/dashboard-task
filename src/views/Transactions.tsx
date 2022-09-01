import { Table } from "antd";
import { columnsTransaction } from "../constants";
import { useStores } from "../store/useStore";

const Transactions = () => {
  const { transactionsStore } = useStores();

  return (
    <div className="page-div">
      <Table columns={columnsTransaction} dataSource={transactionsStore.transactions} />
    </div>
  );
};

export default Transactions;