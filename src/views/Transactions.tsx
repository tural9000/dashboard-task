import { Table, Input } from "antd";
import type { TableProps } from "antd/es/table";
import { columnsTransaction } from "../constants";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import ITransaction from "../types/Transaction";
import { ChangeEvent } from "react";

const Transactions = () => {
  const { transactionsStore } = useStores();

  const onChange: TableProps<ITransaction>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    console.log(transactionsStore.count);
    if (extra.action == "paginate") {
      transactionsStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    transactionsStore.setFilter({
      q: e.target.value,
    });
  };

  return (
    <div className="page-div">
      <div className="search-div">
        <h3>Search:</h3>
        <Input onChange={onChangeFilter} className="search-input" />
      </div>

      <Table
        pagination={{
          total: transactionsStore.count,
        }}
        columns={columnsTransaction}
        dataSource={transactionsStore.transactions}
        onChange={onChange}
      />
    </div>
  );
};

export default observer(Transactions);