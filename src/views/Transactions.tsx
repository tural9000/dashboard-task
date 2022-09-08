import { Table, Input } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import ITransaction from "../types/Transaction";
import { ChangeEvent, useState } from "react";

const REGEX = new RegExp("");

const Transactions = () => {
  const { transactionsStore } = useStores();
  const [value, setValue] = useState<string>("");
  const [regEx, setRegEx] = useState<RegExp>(REGEX);

  const onChange: TableProps<ITransaction>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    if (extra.action == "paginate") {
      transactionsStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const regEx = new RegExp("^" + targetValue + "", "gi");

    transactionsStore.setFilter({
      q: e.target.value.trim()
    });

    setRegEx(regEx);
    setValue(targetValue);
  };

  const columnsTransaction = [
    {
      title: "transaction_name",
      dataIndex: "transaction_name",
      key: "transaction_name",
        render: (cell: string) => {
          return (
            <>
              {regEx.test(cell) ? (
                <span style={{ backgroundColor: "yellow", display: "inline" }}>
                  {value}
                </span>
              ) : (
                ""
              )}
              <span>{cell?.replace(regEx, "")}</span>
            </>
          );
        },
    },
    {
      title: "transaction_status",
      dataIndex: "transaction_status",
      key: "transaction_status",
      render: (cell: string) => {
        return (
          <>
            {regEx.test(cell) ? (
              <span style={{ backgroundColor: "yellow", display: "inline" }}>
                {value}
              </span>
            ) : (
              ""
            )}
            <span>{cell?.replace(regEx, "")}</span>
          </>
        );
      },
    },
  ];

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