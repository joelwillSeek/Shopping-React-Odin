import { useEffect, useState } from "react";

let CartCard = ({
  productId,
  quantity,
  setAdditionalCart,
  setCartUpdate,
  setCartTotal,
}) => {
  let [productObj, setProductObj] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        productObj = json;
        setProductObj({ ...productObj });
      })
      .catch((reject) => console.log(reject));
  }, []);

  function purchase() {
    editAdditionalCart();
  }

  function removeFromCart() {
    editAdditionalCart();
  }

  function editAdditionalCart() {
    setAdditionalCart(
      /**
       *
       * @param {Array} previousArray
       */
      (previousArray) => {
        for (let i = 0; i < previousArray.length; i++) {
          if (previousArray[i].productId == productId) {
            previousArray.splice(i, 1);
            break;
          }
        }

        return [...previousArray];
      }
    );

    setCartUpdate((value) => ++value);

    setCartTotal(
      (previousValue) => (previousValue -= parseInt(productObj.price))
    );
  }

  return (
    <div className="card" style={{ margin: "1rem" }}>
      <div className="center">
        <img src={productObj.image} />
      </div>
      <div>
        <h1 className="title">{productObj.title}</h1>
        <p className="price">{productObj.price}</p>
        <p className="description">Description:{productObj.description}</p>
        <h1 className="amount">Amount:{quantity}</h1>
        <button onClick={() => purchase()}>Purchase</button>
        <button onClick={() => removeFromCart()}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CartCard;
