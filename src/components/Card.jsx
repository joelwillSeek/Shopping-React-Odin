import { useRef, useState } from "react";
import "../styles/Card.css";

let Card = ({
  name,
  price,
  imgUrl,
  productId,
  setAdditionalCart,
  slideOutChart,
  setCartTotal,
}) => {
  let [amount, setAmount] = useState(0);
  let amountInputRef = useRef();

  function AddToCartClicked() {
    slideOutChart(document.querySelector(".slideOut"));
    setAdditionalCart((previousValue) => [
      ...previousValue,
      { productId: productId, quantity: amount },
    ]);
    setCartTotal((previousValue) => (previousValue += parseInt(price)));
  }

  return (
    <div className="card">
      <div className="center">
        <img src={imgUrl} />
      </div>
      <input
        type="number"
        min={0}
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        ref={amountInputRef}
      />
      <div className="bottom">
        <h1>{name}</h1>
        <p>Price:{parseInt(price)}</p>
        <div>
          <button onClick={() => setAmount((previousValue) => ++previousValue)}>
            Increment
          </button>
          <button onClick={() => setAmount((previousValue) => --previousValue)}>
            Decrement
          </button>
          <button onClick={AddToCartClicked}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
