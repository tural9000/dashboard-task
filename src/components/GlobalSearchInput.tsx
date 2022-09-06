import { ChangeEvent } from "react";
import { Input } from "antd";
import { useStores } from "../store/useStore";

const GlobalSearchInput = () => {
  const { globalSearchStore } = useStores();

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    globalSearchStore.setSearch({
      q: e.target.value,
    });
  };

  return (
    <>
      <Input onChange={onChangeFilter} placeholder="Search..." />
      <div className="search-select" onChange={onChangeFilter}>
        <ul>
          <li>Users</li>
          <li>Transactions</li>
          <li>API Tokens</li>
        </ul>
      </div>
    </>
  );
};

export default GlobalSearchInput;