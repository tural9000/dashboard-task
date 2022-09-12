import { observer } from "mobx-react";
import TableComponent from "../components/TableComponent";
import {
  tokensLoc,
  tokenTitleTable,
  transactionsLoc,
  transactionTitleTable,
  usersLoc,
  userTitleTable,
  columnsUser,
  columnsTransaction,
  columnsToken,
} from "../constants";
import { useStores } from "../store/useStore"; 

const Home = () => {
  
  const { usersStore } = useStores();
  const { transactionsStore } = useStores();
  const { tokensStore } = useStores();
  
  
  return (
    <>
      <TableComponent
        loc={usersLoc}
        title={userTitleTable}
        columns={columnsUser}
        dataSource={usersStore.users.slice(0, 8)}
        pagination={false}
      />

      <TableComponent
        loc={transactionsLoc}
        title={transactionTitleTable}
        columns={columnsTransaction}
        dataSource={transactionsStore.transactions.slice(0, 8)}
        pagination={false}
      />

      <TableComponent
        loc={tokensLoc}
        title={tokenTitleTable}
        columns={columnsToken}
        dataSource={tokensStore.tokens.slice(0, 8)}
        pagination={false}
      />
    </>
  );
};

export default observer(Home);