import { observer } from "mobx-react-lite";
import TableComponent from "../components/TableComponent";
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

const columnsToken = [
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

const Home = () => {
  const {usersStore} = useStores()
  const {transactionsStore} = useStores()
  const {tokensStore} = useStores()

  return (
   <div>
    <TableComponent loc='/users' title="Users" columns={columnsUser} dataSource={usersStore.users.slice(0, 4)} pagination={false} />
    <TableComponent loc='/transactions' title="Transactions" columns={columnsTransaction} dataSource={transactionsStore.transactions.slice(0, 4)} pagination={false} />
    <TableComponent loc='/tokens' title="API Tokens" columns={columnsToken} dataSource={tokensStore.tokens.slice(0, 4)} pagination={false} />
   </div>
  );
};

export default observer(Home);