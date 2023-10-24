import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import CameraCapture from "./CameraCapture";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8888/api/products")
      .then((response) => {
        setProducts(response.data);
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
          {products.slice(i, i + 3).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.Title}
              price={product.price}
              rating={product.rating}
              image={product.photos}
            />
          ))}
        </div>
      );
    }
    return rows;
  };

  const [showCameraCapture, setShowCameraCapture] = useState(false);
  const handleUseCameraClick = () => {
    setShowCameraCapture(true);
  };

  return (
    <div className="home">
      <div className="home__container">
        {showCameraCapture ? (
          <CameraCapture />
        ) : (
          <center><button className="use-camera-button" onClick={handleUseCameraClick}>
            Use Camera
          </button></center>
        )}
        <img
          className="home__image"
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/64fea624033ac_hackon-with-amazon-season-3.jpg?d=1920x1920"
          alt=""
        />
        {loading ? <p>Loading...</p> : renderProductRows()}
      </div>
    </div>
  );
}

export default Home;
