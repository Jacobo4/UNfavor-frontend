// Core
import React from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from "./Header/Header.layout";
import Footer from "./Footer/Footer.layout";

const AppLayout = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
