
import { AiOutlineLineChart, AiOutlineLogout } from "react-icons/ai";
import { MdAdminPanelSettings, MdOutlineReportProblem } from "react-icons/md";
import {BiUserCheck} from 'react-icons/bi';
const navLinks=[
    {
        path: '/admin/dashboard',
        icon: <AiOutlineLineChart />,
        display: 'Estadísticas',
    },
    {
        path: '/admin/profilecontrol',
        icon: <BiUserCheck />,
        display: 'Control de Perfiles',
    },
    {
        path: '/admin/reportedProfiles',
        icon: <MdOutlineReportProblem />,
        display: 'Reportes',
    },
]
export default navLinks;
/*
<li className={styles.navItem}>
                <NavLink
                  to="/admin/dashboard"
                  className={(navClass) =>
                    navClass.isActive ? styles.nav_active : styles.nav_link
                  }
                >
                  <AiOutlineLineChart />
                  <span>Estadísticas</span>
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/admin/profilecontrol"
                  className={(navClass) =>
                    navClass.isActive ? styles.nav_active : styles.nav_link
                  }
                >
                  <BiUserCheck />
                  <span>Control de Perfiles</span>
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/admin/reportedProfiles"
                  className={(navClass) =>
                    navClass.isActive ? styles.nav_active : styles.nav_link
                  }
                >
                  <MdOutlineReportProblem />
                  <span>Reportes</span>
                </NavLink>
              </li>
*/