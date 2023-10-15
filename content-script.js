const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";

// Find the "productTitle" element by its ID
const productTitleElement = document.getElementById("productTitle");

if (productTitleElement) {
  productTitleElement.appendChild(box);
} else {
  console.log("Element with ID 'productTitle' not found.");
}