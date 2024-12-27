import React, { useState } from "react";
import "./Header.scss";
import { Layout, Menu, Input, Badge, Drawer, Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    {
      key: "cart",
      label: (
        <Link style={{ color: "#1a202c" }} to="/">
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <span style={{ fontSize: "14px", color: "#1a202c" }}>Cart</span>
            <Badge count={5} size="small">
              <ShoppingCartOutlined style={{ fontSize: "12px" }} />
            </Badge>
          </div>
        </Link>
      ),
    },
    {
      key: "login",
      label: (
        <Link style={{ color: "#1a202c" }} to="/">
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <span style={{ fontSize: "14px", color: "#1a202c" }}>Sign In</span>
            <UserOutlined style={{ fontSize: "12px", color: "#1a202c" }} />
          </div>
        </Link>
      ),
    },
  ];

  return (
    <Layout className="header-area">
      <div className="header-content">
        <div className="logo">
          <Link style={{ color: "#1a202c" }} to="/">
            E-Mart
          </Link>
        </div>

        {/* <Search
          placeholder="Search products"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="search-input"
        /> */}
        <div className="icons">
          <Link style={{ color: "#1a202c" }} to="/">
            <div className="cart-icon">
              <span style={{ fontSize: "14px" }}>Cart</span>
              <Badge count={5} size="small">
                <ShoppingCartOutlined style={{ fontSize: "12px" }} />
              </Badge>
            </div>
          </Link>
          <Link style={{ color: "#1a202c" }} to="/">
            <div className="user-icon">
              <span style={{ fontSize: "14px", marginLeft: "40px" }}>
                Sign In
              </span>
              <UserOutlined style={{ fontSize: "12px" }} />
            </div>
          </Link>
        </div>
        <Button className="menu-button" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
      <Drawer
        //style={{ backgroundColor: "#E5E7EB " }}
        title="Menu"
        placement="right"
        onClose={onClose}
        open={visible}
      >
        <Menu
          // theme="dark"
          //style={{ backgroundColor: "#E5E7EB " }}
          mode="vertical"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        />
      </Drawer>
    </Layout>
  );
};

export default Header;
