import { ChangeEvent, useEffect, useMemo } from "react";
import { Input } from "antd";
import { useStores } from "../store/useStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GlobalSearchInput = () => {
  const { globalSearchStore } = useStores();
  const location = useLocation();

  useEffect(() => {
    onFilterReset();
  }, [location]);

  const onFilterReset = () => {
    globalSearchStore.setSearch({
      q: "",
    });
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    globalSearchStore.setSearch({
      q: e.target.value,
    });
  };

  const Users = useMemo(
    () =>
      globalSearchStore.users
        .slice(0, 3)
        .map(({ id, first_name }) => <li key={id}>{first_name}</li>),
    [globalSearchStore.users]
  );

  const Transactions = useMemo(
    () =>
      globalSearchStore.transactions
        .slice(0, 3)
        .map(({ id, transaction_name }) => (
          <li key={id}>{transaction_name}</li>
        )),
    [globalSearchStore.transactions]
  );

  const APITokens = useMemo(
    () =>
      globalSearchStore.tokens
        .slice(0, 3)
        .map(({ id, first_name }) => <li key={id}>{first_name}</li>),
    [globalSearchStore.tokens]
  );

  return (
    <>
      <div className="globalsearch-input">
        <Input onChange={onChangeFilter} placeholder="Global search..." />

        {globalSearchStore.search.q && (
          <div className="search-select">
            <>
              <Link to="/users">
                <div className="search-div">
                  <h4>Users</h4>
                  <ul>{Users}</ul>
                </div>
              </Link>

              <Link to="/transactions">
                <div className="search-div">
                  <h4>Transactions</h4>
                  <ul>{Transactions}</ul>
                </div>
              </Link>

              <Link to="tokens">
                <div className="search-div">
                  <h4>API Tokens</h4>
                  <ul>{APITokens}</ul>
                </div>
              </Link>
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default observer(GlobalSearchInput);
