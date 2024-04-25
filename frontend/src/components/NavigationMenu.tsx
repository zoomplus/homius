import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { classNames } from "../utils/classNames";

type MenuItem = Required<MenuProps>["items"][number];
const NavigationMenu = ({ openMenu }: { openMenu: boolean }) => {
  const [active, setActive] = useState<string>("");
  const getItem = (
    label: React.ReactNode,
    key: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label: (
        <NavLink to={key}>
          {({ isActive }) => {
            if (isActive) setActive(key);
            return label;
          }}
        </NavLink>
      ),
      type,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getItem("Главная", "/", <HomeOutlined />),
    getItem("Atlas", "/atlas", <HomeOutlined />, [getItem("Option 1", "1")]),
    getItem("Умные устройства", "/smart", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
    ]),
  ];

  return (
    <Menu
      className={classNames({
        additional: ["mr-3", "transition-all", "transform-gpu"],
        mods: {
          "w-0": !openMenu,
          "-translate-x-64": !openMenu,
          "w-64": openMenu,
          "-translate-x-0": openMenu,
        },
      })}
      mode="inline"
      items={items}
      selectedKeys={[active]}
    />
  );
};

export default NavigationMenu;
