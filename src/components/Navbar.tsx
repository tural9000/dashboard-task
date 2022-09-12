import { PageHeader, Menu, Dropdown, Avatar, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStores } from "../store/useStore";

export default () => {
  const loc = useLocation();
  const { usersStore, tokensStore, transactionsStore } = useStores();

  const items = [
    { label: <Link to="/" /* onClick={} */>Home</Link>, key: "/" },
    { label: <Link to="/users" onClick={usersStore.loadUsers}>Users</Link>, key: "/users" },
    { label: <Link to="/transactions" onClick={transactionsStore.loadTransactions}>Transactions</Link>, key: "/transactions"},
    { label: <Link to="/tokens" onClick={tokensStore.loadTokens}>API Tokens</Link >, key: "/tokens" },
  ];

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link  to="/details" >
              Profil
            </Link>
          ),
          key: '0',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Cixis
            </a>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
      ]}
    />
  );
  

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={"PAS"}
        extra={[
          <div className="nav-buttons">
            <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()}>
                  <Space>
                     Oktay Afandi
                    <DownOutlined />
                  </Space>
                  <Avatar icon={<UserOutlined />} />
                </a>
              </Dropdown>
          </div>,
        ]}
      />
      <Menu
        mode="horizontal"
        selectedKeys={[loc.pathname]}
        items={items}
      ></Menu>
    </div>
  );
};
