import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IToken from "../types/Token";
import { ChangeEvent, useState } from "react";

const REGEX = new RegExp("");

const ApiTokens = () => {
  const { tokensStore } = useStores();
  const [value, setValue] = useState<string>("");
  const [regEx, setRegEx] = useState<RegExp>(REGEX);

  const onChange: TableProps<IToken>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    if (extra.action == "paginate") {
      tokensStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const regEx = new RegExp("^" + targetValue + "", "gi");

    tokensStore.setFilter({
      q: e.target.value.trim(),
    });

    setRegEx(regEx);
    setValue(targetValue);
  };

  const columnsToken = [
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
            <span>{cell?.replace(regEx, "")}</span>
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
            <span>{cell?.replace(regEx, "")}</span>
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
          total: tokensStore.count,
        }}
        columns={columnsToken}
        dataSource={tokensStore.tokens}
        onChange={onChange}
      />
    </div>
  );
};

export default observer(ApiTokens);