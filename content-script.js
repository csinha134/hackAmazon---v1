const box = document.createElement("div");
box.style.width = "400px";
box.style.height = "300px";
box.style.backgroundColor = "#FFF";  // White background
box.style.overflow = "auto";
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.justifyContent = "space-between";
box.style.padding = "10px";

const productTitleElement = document.getElementById("productTitle");

if (productTitleElement) {
  productTitleElement.appendChild(box);

  for (let i = 1; i <= 10; i++) {
    const productItem = document.createElement("div");
    productItem.style.width = "calc(50% - 20px)";
    productItem.style.border = "1px solid #000"; // Black border
    productItem.style.padding = "10px";
    productItem.style.margin = "10px";
    productItem.style.backgroundColor = "#FFF"; // White background

    productItem.innerHTML = `
      <h2 style="font-size: 18px; font-weight: bold; color: #000;">Product ${i}</h2>
      <img src="https://via.placeholder.com/150" alt="Product Image ${i}" style="display: block; margin: 0 auto 10px; max-width: 100%; height: auto;">
      <p style="font-size: 14px; color: #555;">Description of Product ${i}. This is a sample product description. It can be longer.</p>
      <p style="font-size: 16px; color: #FF9900;">Price: $${(10 + i * 5).toFixed(2)}</p>
      <a href="sample-products.html" style="display: block; text-align: center; text-decoration: none; background-color: #FF9900; color: #fff; padding: 5px 10px; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#E86E00'" onmouseout="this.style.backgroundColor='#FF9900'">Checkout</a>
    `;

    box.appendChild(productItem);
  }
} else {
  console.log("Element with ID 'productTitle' not found.");
}
