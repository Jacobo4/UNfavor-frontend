import React from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import styles from "./Admin.layout.module.css";
import {Outlet} from "react-router-dom";

const AdminLayout: React.FC = () => {

    return (
        <div className={styles['Admin']}>
            <Sidebar/>
            <div className={styles['main']}>
                <div className={styles['content']}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
