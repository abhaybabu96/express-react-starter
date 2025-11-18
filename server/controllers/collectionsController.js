const axios = require("axios");

exports.getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN } = process.env;

    const url = `${SHOPIFY_STORE}/products.json?collection_id=${id}`;

    const response = await axios.get(url, {
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error("Error fetching collection products:", error.message);

    res.status(500).json({
      error: "Failed to fetch collection products",
    });
  }
};
