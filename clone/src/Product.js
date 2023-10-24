import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom"; 
function Product({ id, title, image, price}) {
  const [{ basket }, dispatch] = useStateValue();
  // const randomRating = Math.floor(Math.random() * 5) + 1;
  const random = Math.random();

  // Determine whether to display 4 or 5 stars
  const rating = random < 0.5 ? 4 : 5;
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
          
      <div className="product__info">
      <Link to={`/product/${id}`}>
        <p>{title}</p>
        </Link>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p key={i}>🌟</p>
        ))}
    </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;