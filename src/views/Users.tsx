import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IUser from "../types/User";
import { columnsUser } from "../constants";
import { ChangeEvent } from "react";

const Users = () => {
  const { usersStore } = useStores();

  const onChange: TableProps<IUser>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    if (extra.action == "paginate") {
      usersStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    usersStore.setFilter({
      q: e.target.value,
    });
  };

  return (
    <>
      <div className="page-div">
        <div className="search-div">
          <h3>Search:</h3>
          <Input onChange={onChangeFilter} className="search-input" />
        </div>
        <Table
          pagination={{
            total: usersStore.count,
          }}
          columns={columnsUser}
          dataSource={usersStore.users}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default observer(Users);