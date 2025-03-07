import { NavLink } from "react-router";

import "./side-bar.styles.css";

const SIDE_BAR_DATA = [
  {
    name: "Store",
    logo: "",
    path: "/",
    index: 1,
  },
  {
    name: "SKU",
    logo: "",
    path: "/skus",
    index: 2,
  },
  {
    name: "Planning",
    logo: "",
    path: "/planning",
    index: 3,
  },
  {
    name: "Charts",
    logo: "",
    path: "/chart",
    index: 4,
  },
];

const SideBar = () => {
  return (
    <div className="side-bar">
      <nav>
        <ul>
          {SIDE_BAR_DATA.map((sideBar) => (
            <li key={sideBar.index}>
              <NavLink
                to={sideBar.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span>{sideBar.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
