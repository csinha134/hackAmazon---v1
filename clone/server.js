const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the db.js file
const queryRouter =require("./queryRoutes");
const app = express();
const port = 8888;

app.use(
  cors({
    origin: ["http://3.110.182.215:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/query", queryRouter);
app.get('/api/products', async (req, res) => {
  try {
    const database = await db.connectToDatabase();
    const products = await db.findProducts(database);
    // database.close();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});
app.get('/product/:id', async (req, res) => {
  const productId = req.params.id;
  
  try {
    const database = await db.connectToDatabase();
    const products = await db.findProductsbyID(productId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
