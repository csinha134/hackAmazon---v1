// Create a div element for the box
const box = document.createElement("div");
box.style.width = "600px"; // Adjust the width as needed
box.style.height = "300px"; // Adjust the height as needed
box.style.backgroundColor = "grey";
box.style.overflow = "auto"; // Enable scrolling

// Find the "productTitle" element by its ID
const productTitleElement = document.getElementById("productTitle");

if (productTitleElement) {
  // Append the box to the "productTitle" element
  productTitleElement.appendChild(box);

  // Create product details inside the scrollable box
  for (let i = 1; i <= 10; i++) {
    const productItem = document.createElement("div");
    productItem.style.border = "1px solid #ccc";
    productItem.style.padding = "10px";
    productItem.style.margin = "10px";
    productItem.style.backgroundColor = "#f9f9f9";
    productItem.innerHTML = `
      <h2>Product ${i}</h2>
      <img src="https://m.media-amazon.com/images/I/31pFQxZ65KL._SY300_SX300_QL70_FMwebp_.jpg" alt="Product Image ${i}" width="150" height="150">
      <p>Description of Product ${i}. This is a sample product description. It can be longer.</p>
      <p>Price: $${(10 + i * 5).toFixed(2)}</p>
      <a href="sample-products.html">Checkout</a> <!-- Link to sample products related to this product -->
    `;
    box.appendChild(productItem);
  }
} else {
  console.log("Element with ID 'productTitle' not found.");
}
