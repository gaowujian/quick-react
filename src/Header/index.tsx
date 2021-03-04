import { Menu } from "antd";

import React from "react";
import "./style.less";

const Header: React.FC = function (props) {
  return (
    <div className="nav-header">
      <Menu mode="horizontal">
        <Menu.Item>首页</Menu.Item>
        <Menu.Item>个人中心</Menu.Item>
        <Menu.Item>关于</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
