function createProductListing() {
  // Create a banner to indicate eco-friendliness
  const banner = document.createElement("div");
  banner.style.backgroundColor = "#4CAF50"; // Green background color
  banner.style.color = "#FFF"; // White text color
  banner.style.padding = "10px";
  banner.style.textAlign = "center";
  banner.innerText = "These products are eco-friendly- Sorted By Sustainablity index (extension embedded)";

  // Create a product listing container
  const box = document.createElement("div");
  box.style.width = "100%"; // Adjust the width dynamically
  box.style.height = "300px";
  box.style.backgroundColor = "#FFF"; // White background
  box.style.overflow = "auto";
  box.style.display = "flex";
  box.style.flexWrap = "wrap";
  box.style.justifyContent = "space-between";
  box.style.padding = "10px";


  if (productTitleElement) {
    var categoryElement = document.getElementById("categoryID");
    const text = categoryElement.textContent;

    // Split the text using ":" as a delimiter and select the second part
    const parts = text.split(":");
    const category = parts[parts.length-1].trim(); // Trim to remove leading/trailing whitespace

    fetch(`http://3.110.182.215:7777/query_records/json/${category}`)
      .then((response) => response.json())
      .then((data) => {
        var jsonData = JSON.parse(data);
        console.log(jsonData);

        // Append the banner to the product listing
        productTitleElement.appendChild(banner);

        // Append the product listing container
        productTitleElement.appendChild(box);

        jsonData.forEach((product) => {
          const productItem = document.createElement("div");
          productItem.style.width = "calc(50% - 20px)";
          productItem.style.border = "1px solid #000"; // Black border
          productItem.style.padding = "10px";
          productItem.style.margin = "10px";
          productItem.style.backgroundColor = "#FFF"; // White background
          const greenValue = Math.floor(product.Sustanibility_ind * 255);
          const redValue = 255 - greenValue;
          const intensity = greenValue * product.Sustanibility_ind;
          productItem.style.backgroundColor = `rgba(${redValue}, ${intensity}, 0, 1)`;


          productItem.innerHTML = `
            <h2 style="font-size: 18px; font-weight: bold; color: #000;">Product ${product.Title}</h2>
            <img src="${product.photos}" alt="Product Image" style="display: block; margin: 0 auto 10px; max-width: 100%; height: auto;">
            <p style="font-size: 14px; color: #555;">Description of Product ${product.about}. This is a sample product description. It can be longer.</p>
            <p style="font-size: 16px; color: #FF9900;">Price: ₹${product.price}</p>
            <p>${product.Sustanibility_ind}</p>
          `;

          box.appendChild(productItem);
        });
        // You can update your product listing here
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  } else {
    console.log("Element with ID 'categoryID' not found.");
  }
}

var productTitleElement = null;

// Retry the code every 2 seconds
const retryInterval = setInterval(() => {
  productTitleElement = document.getElementById("productTitle");
  if (productTitleElement) {
    clearInterval(retryInterval); // Stop retrying if the element is found
    createProductListing();
  }
}, 2000);
