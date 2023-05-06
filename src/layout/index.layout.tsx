// Core
import React from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from "@layout/Header/Header.layout";
import Footer from "@layout/Footer/Footer.layout";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Header />
        <main>
             <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
