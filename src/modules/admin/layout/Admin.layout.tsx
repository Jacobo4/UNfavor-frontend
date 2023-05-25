import React from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import styles from "./Admin.layout.module.css";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@store/hooks";

const AdminLayout: React.FC = () => {
  const { isLogged } = useAppSelector((state) => state.auth);

  const isAdmin = useAppSelector((state) => state.auth.token?.admin);
  return (
    <div className={"Admin"}>
      {isLogged && isAdmin && (
        <>
          <Sidebar />
          <div className={styles.main}>
            <div className={styles.content}>
              <Outlet />
            </div>
          </div>
        </>
      )}
      {isLogged && !isAdmin && (
        <>
          <h1>¡NO ERES ADMINISTRADOR!</h1>
        </>
      )}
    </div>
  );
};

export default AdminLayout;
