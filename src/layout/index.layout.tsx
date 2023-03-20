import { Outlet } from "react-router-dom";
import React from "react";
import Header from "@layout/Header/Header.layout";
import Footer from "@layout/Footer/Footer.layout";

// import Footer from './Footer/Footer.layout';
// import Header from './Header/Header.layout';

const Layout = () => {
  return (
    <>
      <div className="App">
        <Header />
        {/*<AsideServicesNav />*/}
        <main>
             <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
