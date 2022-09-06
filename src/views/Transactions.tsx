import { Table, Input } from "antd";
import type { TableProps } from "antd/es/table";
import { columnsTransaction } from "../constants";
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
      title: "first_name",
      dataIndex: "first_name",
      key: "first_name",
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
              <span>{cell.replace(regEx, "")}</span>
            </>
          );
        },
    },
    {
      title: "last_name",
      dataIndex: "last_name",
      key: "last_name",
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
            <span>{cell.replace(regEx, "")}</span>
          </>
        );
      },
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
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
            <span>{cell.replace(regEx, "")}</span>
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