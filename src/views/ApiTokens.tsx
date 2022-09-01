import { Table } from "antd";
import { columnsToken } from "../constants";
import { useStores } from "../store/useStore";

const ApiTokens = () => {
  const { tokensStore } = useStores();

  return (
    <div className="page-div">
      <Table columns={columnsToken} dataSource={tokensStore.tokens} />
    </div>
  );
};

export default ApiTokens;