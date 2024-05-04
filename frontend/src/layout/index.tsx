import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationMenu from "../components/NavigationMenu";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="flex flex-row overflow-hidden">
        <NavigationMenu openMenu={openMenu} />
        <section className="container mx-auto">
          <div className="mr-6 sm:mr-0">
              <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
