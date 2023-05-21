import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopNav from "./TopNav/TopNav";
import styles from "./Admin.module.css";
import { Outlet } from "react-router-dom";
const Admin: React.FC = () => {
  
  return (
    
    <div >
        <Sidebar/>
        <div className={styles.main}>
          
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Admin;
