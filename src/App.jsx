import { useRef, useState } from "react";
import Chart from "./components/Chart";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Home from "./components/Home";
import ShoppingPage from "./components/ShoppingPage";
import "./styles/App.css";

let App = () => {
  let chartContainerRef = useRef();
  let [cartUpdate, setCartUpdate] = useState(0);
  //to make sure the user's cart is on chart b/c api doesn't actually store cart
  //{name,price,imgUrl,productId}
  let [additionalCart, setAdditionalCart] = useState([]);
  let [cartTotal, setCartTotal] = useState(0);

  function chartClicked() {
    /**
     * @type {HTMLDivElement}
     */
    let chartContainer = chartContainerRef.current;

    slideOutChart(chartContainer, `0px`);

    setCartUpdate((previousValue) => ++previousValue);
  }

  function slideOutChart(chartContainer, pixels = `-600px`) {
    chartContainer.style.right = pixels;
  }

  return (
    <>
      <div className="navContainer">
        <h1 className="logo">LOGO</h1>
        <ul className="nav left">
          <li>
            <NavLink to="/" className={"homeLink"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="shopping">Shopping</NavLink>
          </li>
        </ul>

        <button className="chart" onClick={chartClicked}>
          Chart
        </button>
      </div>

      <Chart
        cartUpdate={cartUpdate}
        setCartTotal={setCartTotal}
        setCartUpdate={setCartUpdate}
        cartTotal={cartTotal}
        chartContainerRef={chartContainerRef}
        additionalCart={additionalCart}
        setAdditionalCart={setAdditionalCart}
        slideOutChart={slideOutChart}
      ></Chart>

      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="shopping" element={<ShoppingPage />}>
          <Route
            index
            path="all"
            element={
              <AllProducts
                setCartTotal={setCartTotal}
                slideOutChart={slideOutChart}
                setAdditionalCart={setAdditionalCart}
                key={"/page1"}
                apiUrl={"https://fakestoreapi.com/products"}
              />
            }
          ></Route>
          <Route
            index
            path="Mens"
            setAdditionalCart={setAdditionalCart}
            element={
              <AllProducts
                slideOutChart={slideOutChart}
                setCartTotal={setCartTotal}
                setAdditionalCart={setAdditionalCart}
                key={"/page2"}
                apiUrl={
                  "https://fakestoreapi.com/products/category/men's clothing"
                }
              />
            }
          ></Route>
          <Route
            key={"/page3"}
            path="jewel"
            setAdditionalCart={setAdditionalCart}
            element={
              <AllProducts
                slideOutChart={slideOutChart}
                setCartTotal={setCartTotal}
                setAdditionalCart={setAdditionalCart}
                apiUrl={"https://fakestoreapi.com/products/category/jewelery"}
              />
            }
          ></Route>
          <Route
            key={"/page3"}
            path="electronics"
            setAdditionalCart={setAdditionalCart}
            element={
              <AllProducts
                slideOutChart={slideOutChart}
                setCartTotal={setCartTotal}
                setAdditionalCart={setAdditionalCart}
                apiUrl={
                  "https://fakestoreapi.com/products/category/electronics"
                }
              />
            }
          ></Route>
          <Route
            key={"/page3"}
            path="women"
            setAdditionalCart={setAdditionalCart}
            element={
              <AllProducts
                slideOutChart={slideOutChart}
                setCartTotal={setCartTotal}
                setAdditionalCart={setAdditionalCart}
                apiUrl={
                  "https://fakestoreapi.com/products/category/women's clothing"
                }
              />
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
      </Routes>
    </>
  );
};

export default App;
