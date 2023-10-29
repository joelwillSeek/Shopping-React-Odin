import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import "../styles/chartContainer.css";

function Chart({
  cartUpdate,
  chartContainerRef,
  additionalCart,
  setAdditionalCart,
  setCartUpdate,
  slideOutChart,
  setCartTotal,
  cartTotal,
}) {
  //  { productId: 1, quantity: 4 }
  let [cart, setCart] = useState([]);

  useEffect(() => {
    setCart([...additionalCart]);
  }, [cartUpdate, cartTotal]);

  function goBackClicked() {
    /**
     * @type {HTMLDivElement}
     */
    let chartContainer = chartContainerRef.current;

    slideOutChart(chartContainer);
  }

  return (
    <div className="chartContainer slideOut" ref={chartContainerRef}>
      <button onClick={() => goBackClicked()} className="goBack">
        goBack
      </button>
      <h1>chartContainer</h1>

      {cart.map((productInfo, index) => (
        <CartCard
          setCartUpdate={setCartUpdate}
          setAdditionalCart={setAdditionalCart}
          key={index}
          setCartTotal={setCartTotal}
          productId={productInfo.productId}
          quantity={productInfo.quantity}
        ></CartCard>
      ))}

      <h1>Total Price:{cartTotal}</h1>
    </div>
  );
}

export default Chart;
