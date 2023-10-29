import Card from "./Card";
import "../styles/containerOfProducts.css";
import { useEffect, useState } from "react";

let AllProducts = ({
  apiUrl,
  setAdditionalCart,
  slideOutChart,
  setCartTotal,
}) => {
  let [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        let data = json;
        setProducts(data);
      })
      .catch((reject) => console.log(reject, "probably network"));
  }, []);

  return (
    <>
      <div className="container">
        {Products.map((value) => (
          <Card
            slideOutChart={slideOutChart}
            setAdditionalCart={setAdditionalCart}
            setCartTotal={setCartTotal}
            key={value.id}
            productId={value.id}
            name={value.title}
            imgUrl={value.image}
            price={value.price}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
