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
    const { SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_TOKEN } = process.env;
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

    const response = await axios.post( `${SHOPIFY_STORE_DOMAIN}/api/2025-10/graphql.json`,
      { query },
      {
        headers: {
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );

    console.log("GraphQL Response:", response.data);
    res.json(response.data);

  } catch (err) {
    console.log("Error:", err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.post("/api/cart/add", async (req, res) => {
  const { cartId, variantId, quantity } = req.body;

  try {
    const query = `
      mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            totalQuantity
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const variables = {
      cartId,
      lines: [
        {
          merchandiseId: `gid://shopify/ProductVariant/${Number(variantId)}`,
          quantity: Number(quantity)
        }
      ]
    };

    const response = await axios.post(
      "https://test-truly-beauty.myshopify.com/api/2025-01/graphql.json",
      {
        query,
        variables,
      },
      {
        headers: {
          "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Cart Add Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Unable to add to cart" });
  }
});

router.get("/api/cart", async (req, res) => {
  const cartId = "gid://shopify/Cart/hWN5eN6kRI4EHTTzspju8IM8?key=fd889268aa043f01ce700eb95eaf6c60";
  //console.log("cartId",cartId);
  if (!cartId)
    return res.status(400).json({ error: "cartId missing" });

  const query = `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        totalQuantity
        lines(first: 20) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                  }
                  product {
                    title
                    featuredImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post("https://test-truly-beauty.myshopify.com/api/2025-01/graphql.json",
      { 
        query, variables: { cartId } 
      },
      { headers: {
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN,
        "Content-Type": "application/json",
      }, }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Cart fetch failed" });
  }
});





module.exports = router;
