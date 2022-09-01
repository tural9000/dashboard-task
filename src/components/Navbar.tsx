import { PageHeader, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default () => {
  const loc = useLocation()

  useEffect(() => {
    console.log(loc.pathname, 'loc');
    
  }, [])

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
      <PageHeader
        ghost={false}
        title={"PAS"}
        extra={[
          <div className="nav-buttons">
            <Dropdown overlay={menu} placement="bottomCenter">
              <a className="profile-button">
                Oktay Afandi
                <Avatar icon={<UserOutlined />} />
              </a>
            </Dropdown>
          </div>
        ]}
      />
      <Menu mode="horizontal" selectedKeys={[loc.pathname]}>
        <Menu.Item key="/"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="/users"><Link to='/users'>Users</Link></Menu.Item>
        <Menu.Item key="/transactions"><Link to='/transactions'>Transactions</Link></Menu.Item>
        <Menu.Item key="/tokens"><Link to='/tokens'>API Tokens</Link></Menu.Item>
      </Menu>
    </div>
  );
};