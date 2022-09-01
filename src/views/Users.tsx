import { Table } from "antd";
import { useStores } from "../store/useStore";

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

const Users = () => {
  const { usersStore } = useStores();

  return (
    <div className="page-div">
      <Table columns={columnsUser} dataSource={usersStore.users} />
    </div>
  );
};

export default Users;