import React from "react";

import Logout from "../components/Logout";
import MenuBar from "../components/MenuBar";
import WelcomeUser from "../components/WelcomeUser";

const Header = ({
  setOpenMenu,
  openMenu,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
}) => {
  return (
    <header className="flex h-16 md:h-24 w-full flex-row items-center justify-between bg-section px-5">
      <MenuBar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      {/*<WelcomeUser />*/}
      <Logout />
    </header>
  );
};

export default Header;
