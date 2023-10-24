import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase"; // Import Firebase library and initialize it if not already done

function ProductDetail() {
  const { id } = useParams(); // Use the `useParams` hook to get the `id` from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from Firebase using the `id`
    const productRef = firebase.database().ref("products/" + id);

    productRef.on("value", (snapshot) => {
      // Update the product state with the fetched data
      setProduct(snapshot.val());
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <img src={product.image} alt={product.title} />
      {/* Add more product details as needed */}
    </div>
  );
}

export default ProductDetail;
