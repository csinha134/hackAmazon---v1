console.log("Logging 'ni'"); // This log statement will help you verify if the code execution reaches this point.

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    
    if (!tab) {
        console.error("No active tab found.");
        return;
    }
    
    const tabUrl = tab.url;
    console.log("Tab URL:", tabUrl); // Log the tab URL to verify it.

    // if (tabUrl.includes("amazon.in")) {
        let productName;
        let producePrice;
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                function: scrapeAmazonProductName,
            },
            (results) => {
                productName = results[0].result;
                console.log("Product Name:", productName); // Log the product name to verify it.
                document.getElementById("product-name").textContent = productName;
            }
        );
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                function: scrapeAmazonProductPrice,
            },
            (results) => {
                producePrice = results[0].result;
                console.log("Product Price:", producePrice); // Log the product name to verify it.
                document.getElementById("product-price").textContent = producePrice;
            }
        );

    // }
});

function scrapeAmazonProductName() {
    const productNameElement = document.querySelector("span#productTitle");
    if (productNameElement) {
        return productNameElement.textContent.trim();
    }
    return "Product name not found";
}

function scrapeAmazonProductPrice() {
    const productPriceElement = document.querySelector("span.a-price-whole");
    if (productPriceElement) {
        return productPriceElement.textContent.trim();
    }
    return "Product name not found";
}
