import { MenuOutlined } from "@ant-design/icons";
import React from "react";

import { classNames } from "../utils/classNames";

const MenuBar = ({
  setOpenMenu,
  openMenu,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
}) => {
  return (
    <div
      className={classNames({
        cls: "h-fit cursor-pointer rounded-full border-2 border-accent p-3 sm:p-4 md:p-6",
        mods: {
          "bg-accent": !openMenu,
        },
      })}
      onClick={() => {
        setOpenMenu((openMenu) => !openMenu);
      }}
    >
      <MenuOutlined className="flex w-4 content-center justify-center" />
    </div>
  );
};

export default MenuBar;
