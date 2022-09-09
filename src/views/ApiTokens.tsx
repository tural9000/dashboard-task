import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IToken from "../types/Token";
import { ChangeEvent, useState } from "react";
import Highlighter from "../components/Highlighter";

const ApiTokens = () => {
  const { tokensStore } = useStores();
  const [search, setSearch] = useState<string>("");

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

  const columnsToken = [
    {
      title: "first_name",
      dataIndex: "first_name",
      key: "first_name",
      render: (cell: string) => {
        return <Highlighter value={cell} search={search} />;
      },
    },
    {
      title: "last_name",
      dataIndex: "last_name",
      key: "last_name",
      render: (cell: string) => {
        return <Highlighter value={cell} search={search} />;
      },
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      render: (cell: string) => {
        return <Highlighter value={cell} search={search} />;
      },
    },
  ];

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    tokensStore.setFilter({
      q: e.target.value.trim(),
    });

    setSearch(targetValue);
  };

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