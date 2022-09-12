import { Input, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useStores } from "../store/useStore"; 
import { observer } from "mobx-react";
import IUser from "../types/User";
import { columnsUser } from "../constants";
import { useNavigate } from "react-router-dom";
import styl from "./UserDetails.module.scss";
import { ChangeEvent, useState } from "react";
const REGEX = new RegExp("");

const Users = () => {
  const { usersStore } = useStores();
  const navigate = useNavigate()
  const [value, setValue] = useState<string>("");
  const [regEx, setRegEx] = useState<RegExp>(REGEX);

  const onPress = (id:number) =>{
    navigate(`/details/${id}`)
    usersStore.setActiveUser(id)
  }

  const columns:ColumnsType<IUser> = columnsUser.map(item => {
      return {
        ...item,
        render: (cell:any, record: IUser) => {
          return (
            <a onClick={() => onPress(record.id)} className={styl.userList}>
              {regEx.test(cell) ? (
                  <span style={{ backgroundColor: "yellow", display: "inline" }}>
                    {value}
                  </span>
                ) : (
                   ""
                )}
                <span>{cell?.replace(regEx, "")}</span>
            </a>
          )
        }
      }
      
  })

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
  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const regEx = new RegExp("^" + targetValue + "", "gi");

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
            <Input onChange={onChangeFilter} className="search-input" />
        </div>
        <Table className={styl['ant-table-tbody']}
          pagination={{
            total: usersStore.count,
          }}
          size="middle"
          columns={columns}
          dataSource={usersStore.users}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default observer(Users);