import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IUser from "../types/User";
import { ChangeEvent } from "react";
import { useState } from "react";
import { Highlighter } from "../components/AllComponents";

const Users = () => {
  const { usersStore } = useStores();
  const [search, setSearch] = useState<string>("");

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

  const columnsUser = [
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

    usersStore.setFilter({
      q: e.target.value.trim(),
    });

    setSearch(targetValue);
  };

  return (
    <>
      <div className="page-div">
        <div className="search-div">
          <h3>Search:</h3>
          <Input
            defaultValue={usersStore.filters.q}
            onChange={onChangeFilter}
            className="search-input"
          />
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