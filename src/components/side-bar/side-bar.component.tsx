import { NavLink } from "react-router";

const SideBar = ()=>{
    return (
        <div className="side-bar">
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <span>Store</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/skus" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <span>SKU</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/planning" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <span>Planning</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/chart" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <span>Charts</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default SideBar;