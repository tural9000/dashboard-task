import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { columnsToken } from "../constants";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IToken from "../types/Token";
import { ChangeEvent } from "react";

const ApiTokens = () => {
  const { tokensStore } = useStores();

  const onChange: TableProps<IToken>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    console.log(tokensStore.count);
    if (extra.action == "paginate") {
      tokensStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    tokensStore.setFilter({
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