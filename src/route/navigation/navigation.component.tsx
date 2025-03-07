import { Outlet } from "react-router";
import NavBar from "../../components/nav-bar/nav-bar.component";
import SideBar from "../../components/side-bar/side-bar.component";

import "./navigation.styles.css";

const Navigation = () => {
  return (
    <main>
      <NavBar />
      <div className="app-container">
        <SideBar />
        <Outlet />
      </div>
    </main>
  );
};

export default Navigation;
