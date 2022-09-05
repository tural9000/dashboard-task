import React, { ChangeEvent } from "react";
import { Input } from "antd";
import { useStores } from "../store/useStore";

const GlobalSearchInput = () => {
  const { globalSearchStore } = useStores();
  
  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('sa');
    
    globalSearchStore.setSearch({
      q: e.target.value,
    });
  };
  
  return <Input onChange={onChangeFilter} placeholder="Search..." />;
};

export default GlobalSearchInput;