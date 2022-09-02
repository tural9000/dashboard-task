import { Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IUser from "../types/User";
import { columnsUser } from "../constants";

const Users = () => {
  const { usersStore } = useStores();

  const onChange: TableProps<IUser>["onChange"] = (
    pagination,
    _,
    __,
    extra
  ) => {
    console.log(usersStore.count);
    if (extra.action == "paginate") {
      usersStore.setFilter({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    }
  };

  return (
    <>
      <div className="page-div">
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