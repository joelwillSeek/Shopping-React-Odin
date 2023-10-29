import { NavLink } from "react-router-dom";
import "../styles/Home.css";

let Home = () => {
  return (
    <div className="home">
      <div className="dropShadow">
        <div className="landingPage">
          <h1>Cloth Is Good</h1>
          <p>I hope your not reading this but if so stop reading it.THX</p>
          <button className="shop">
            <NavLink to={"/shopping"}>Start Shop</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
