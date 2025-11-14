// const express = require('express');
// const app = express();

// app.get('/api/test', (req, res) => {
//   res.send('Server is running!');
// });

// module.exports = app;


// server/index.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Shopify products API
router.get('/api/products', async (req, res) => {
  try {
    const {env :{SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN}} = process
    const response = await axios.get(SHOPIFY_STORE+'/products.json?status=active', {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

router.get('/api/collectinos', async (req, res) => {
  try {
    const {env :{SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN}} = process
    const response = await axios.get(SHOPIFY_STORE+'/custom_collections.json', {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
