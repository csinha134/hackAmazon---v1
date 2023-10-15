// Create a div element for the box
const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";

// Find the "productTitle" element by its ID
const productTitleElement = document.getElementById("productTitle");

if (productTitleElement) {
  // Append the box to the "productTitle" element
  productTitleElement.appendChild(box);

  // Change the background color of the box
  box.style.backgroundColor = "green";

  // Change the text content of the box
  box.textContent = "PRODUCT TITLE\nProduct Index";
} else {
  console.log("Element with ID 'productTitle' not found.");
}
