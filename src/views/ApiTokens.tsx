import { Table } from "antd";
import { useStores } from "../store/useStore";

const columnsUser = [
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

const ApiTokens = () => {
  const { tokensStore } = useStores();

  return (
    <div className="page-div">
      <Table columns={columnsUser} dataSource={tokensStore.tokens} />
    </div>
  );
};

export default ApiTokens;