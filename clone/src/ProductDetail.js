import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import your CSS for styling
import "./Product.css";

function ProductDetail() {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id:product.id,
            title: product.Title,
            image: product.photos,
            price: product.price,
            rating: product.rating,
            // materialUsed : product.materialUsed,
            // carbonEmissions:product.carbonEmissions,
            // sellerName:product.sellerName,
            // about:product.about,
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
  
  const rating = parseFloat(product.Ratings);

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.photos} alt={product.Title} />
      </div>
      <div className="product-detail__info">
        <h1 id="productTitle" className="product-detail__title">
          {product.Title}
        </h1>
        <p className="product-detail__price">₹{product.price}</p>
        
        <button onClick={addToBasket}>Add to Basket</button>
        <div className="product-detail__features">
          <h3>Product Features</h3>
          <p>{product.about}</p>
        </div>
        <div className="product-detail__additional-info">
          <h3>Additional Information</h3>
          <p>Brand: {product.Brand}</p>
          <p>Color: {product.color}</p>
          <p>Size: {product.size}</p>
          <p>Weight (gm): {product["weight(gm)"].$numberInt}</p>
          <p>Material Used: {product.material_used.$numberInt}</p>
          <p>Carbon Emissions: {product.carbon_emissions}</p>
          <p>Seller Name: {product.Seller_Name}</p>
          <p id="categoryID">Category: {product.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
