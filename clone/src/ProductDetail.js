import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import your CSS for styling


function ProductDetail() {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id:product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            rating: product.rating,
          },
        });
      };
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details from your API or database
    fetch(`http://localhost:8888/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail__info">
        <h1 id= "productTitle" className="product-detail__title">{product.title}</h1>
        <p className="product-detail__price">${product.price}</p>
        <div className="product-detail__rating">
          {/* Example: Display star ratings here */}
          <div className="star-rating">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>
        </div>
      
        <button className="product-detail__button">Add to Cart</button>
        <div className="product-detail__features">
          <h3>Product Features</h3>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default ProductDetail;
