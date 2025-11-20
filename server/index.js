// const express = require('express');
// const app = express();

// app.get('/api/test', (req, res) => {
//   res.send('Server is running!');
// });

// module.exports = app;

// server/index.js
const express = require("express");
const axios = require("axios");
const router = express.Router();
//const collectionsRouter = require('./routes/collections')

// Shopify products API
router.get("/api/products", async (req, res) => {
  try {
    const {
      env: { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN },
    } = process;
    const response = await axios.get(
      SHOPIFY_STORE + "/products.json?status=active",
      {
        headers: {
          "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/api/collections", async (req, res) => {
  try {
    const {
      env: { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN },
    } = process;
    const response = await axios.get(
      SHOPIFY_STORE + "/custom_collections.json",
      {
        headers: {
          "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/api/collection/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      env: { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN },
    } = process;
    const response = await axios.get(
      SHOPIFY_STORE + `/products.json?collection_id=${id}`,
      {
        headers: {
          "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching collection products:", error.message);
    res.status(500).json({ error: "Failed to fetch collection products" });
  }
});

router.get("/api/product/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const {
      env: { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN },
    } = process;
    const response = await axios.get(SHOPIFY_STORE + `/products/${pid}.json`, {
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching collection products:", error.message);
    res.status(500).json({ error: "Failed to fetch collection products" });
  }
});

router.post("/api/cart/create", async (req, res) => {
  try {
    const {
      env: {SHOPIFY_ADMIN_TOKEN},
    } = process;
    const query = `
      mutation cartCreate {
        cartCreate {
          cart {
            id
            createdAt
            updatedAt
          }
          userErrors {
            field
            message
          }
        }
      }
    `;
    const response = await axios.post(
      `https://test-truly-beauty.myshopify.com/api/2025-10/graphql.json`,
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
    console.log('Response Data',response.data);
  } catch (err) {
    // Normalize error to surface GraphQL errors or network errors clearly
    const shopifyErr = err.response?.data || err.message;
    throw new Error(
      typeof shopifyErr === "string" ? shopifyErr : JSON.stringify(shopifyErr)
    );
  }
});

module.exports = router;
