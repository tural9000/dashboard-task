import { PageHeader, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { GlobalSearchInput } from "./AllComponents";

export default () => {
  const loc = useLocation();

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Çıxış et
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader>
        <h1 className="h1">PAS</h1>

        <GlobalSearchInput />

        <Dropdown overlay={menu} placement="bottomCenter">
          <a className="profile-button">
            Oktay Afandi
            <Avatar icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </PageHeader>

      <Menu mode="horizontal" selectedKeys={[loc.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="/transactions">
          <Link to="/transactions">Transactions</Link>
        </Menu.Item>
        <Menu.Item key="/tokens">
          <Link to="/tokens">API Tokens</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};