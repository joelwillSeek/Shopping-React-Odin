import { NavLink, Outlet } from "react-router-dom";
import "../styles/shoppingPage.css";

let ShoppingPage = () => {
  return (
    <div className="shoppingBg">
      <ul className="navForShopping">
        <li>
          <NavLink to="/shopping/all" className={"noMargin"}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopping/Mens">Men's Clothing</NavLink>
        </li>
        <li>
          <NavLink to="/shopping/jewel">Jewelry</NavLink>
        </li>
        <li>
          <NavLink to="/shopping/women">women</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default ShoppingPage;
