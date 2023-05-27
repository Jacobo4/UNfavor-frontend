// Core
import React from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from "./Header/Header.layout";
import Footer from "./Footer/Footer.layout";
import {useAppSelector} from "@store/hooks";

const AppLayout = () => {
  const isAdmin = useAppSelector((state) => state.auth.token?.admin);

  return (
    <>
      <div className="App">
          {!isAdmin && <Header />}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
