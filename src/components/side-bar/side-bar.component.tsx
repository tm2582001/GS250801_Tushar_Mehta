import { NavLink } from "react-router";
import StoreIcon from '../../assets/shop-solid.svg';
import SkuIcon from '../../assets/money-check-solid.svg';
import PlaningIcon from "../../assets/chart-column-solid.svg"
import ChartIcon from "../../assets/chart-line-solid.svg"
import "./side-bar.styles.css";

const SIDE_BAR_DATA = [
  {
    name: "Store",
    logo: StoreIcon,
    path: "/",
    index: 1,
  },
  {
    name: "SKU",
    logo: SkuIcon,
    path: "/skus",
    index: 2,
  },
  {
    name: "Planning",
    logo: PlaningIcon,
    path: "/planning",
    index: 3,
  },
  {
    name: "Charts",
    logo: ChartIcon,
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
                className={({ isActive }) => (isActive ? "active side-bar-button" : "side-bar-button")}
              >
                <img className="side-bar-icon" src={sideBar.logo}/>
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
