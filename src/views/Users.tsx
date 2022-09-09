import { Input, Table } from "antd";
import type { TableProps } from "antd/es/table";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react";
import IUser from "../types/User";
import { ChangeEvent } from "react";
import { useState } from "react";
import HighlightMatchingText from "../components/HighlightMatchingText";

const REGEX = new RegExp("");

const Users = () => {
  const { usersStore } = useStores();
  const [value, setValue] = useState<string>("");
  const [regEx, setRegEx] = useState<RegExp>(REGEX);

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
    },
    {
      title: "last_name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const regEx = new RegExp(targetValue + "", "gi");

    usersStore.setFilter({
      q: e.target.value.trim()
    });

    setRegEx(regEx);
    setValue(targetValue);
  };

  return (
    <>
      <div className="page-div">
        <div className="search-div">
          <h3>Search:</h3>
          <Input defaultValue={usersStore.filters.q} onChange={onChangeFilter} className="search-input" />
          <p>{HighlightMatchingText('text here', 'text')}</p>
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