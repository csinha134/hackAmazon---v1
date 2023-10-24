import React , { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import CameraCapture from "./CameraCapture";
// import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from an API or database here
    axios.get("http://localhost:8888/api/products")
      .then((response) => {
        setProducts(response.data); // Assuming the response is an array of products
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const renderProductRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      rows.push(
        <div key={i} className="home__row">
          {products.slice(i, i + 4).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              brand={product.Brand}
              title={product.Title}
              rating={product.rating}
              price={product.price}
              image={product.photos}
              materialUsed = {product.materialUsed}
              carbonEmissions={product.carbonEmissions}
              sellerName={product.sellerName}
              about={product.about}
            />
          ))}
        </div>
      );
    }
    return rows;
  };
  
  const [showCameraCapture, setShowCameraCapture] = useState(false);
  const handleUseCameraClick = () => {
    // Set the state variable to true to display the camera capture component
    setShowCameraCapture(true);
  };
  return (
    <div className="home">
      <div className="home__container">
      {showCameraCapture ? (
        
          <CameraCapture />
        ) : (
          <button
  className="use-camera-button" // You can add a custom CSS class
  onClick={handleUseCameraClick}
>
  Use Camera
</button>

        )}
        <img
          className="home__image"
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/64fea624033ac_hackon-with-amazon-season-3.jpg?d=1920x1920"
          alt=""
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          renderProductRows()
        )}
      </div>
    </div>
  );
}

export default Home;
