// server/utils/shopifyGraphQL.js
const axios = require("axios");

async function shopifyGraphQL(query, variables = {}) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_ADMIN_TOKEN;

  if (!domain || !token) {
    throw new Error("SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN missing in env");
  }

  const url = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const resp = await axios.post(
      url,
      { query, variables },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token,
        },
        timeout: 15000,
      }
    );
    return resp.data;
    //console.log(resp.data);
  } catch (err) {
    // Normalize error to surface GraphQL errors or network errors clearly
    const shopifyErr = err.response?.data || err.message;
    throw new Error(typeof shopifyErr === "string" ? shopifyErr : JSON.stringify(shopifyErr));
  }
}

module.exports = shopifyGraphQL;
