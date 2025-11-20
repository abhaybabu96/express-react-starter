import axios from "axios";

export async function createCart() {
  try {
    const { SHOPIFY_STORE, SHOPIFY_ADMIN_TOKEN } = process.env;

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
      SHOPIFY_STORE + "/graphql.json",
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Cart Create Error:", err.response?.data || err.message);
    throw err;
  }
}
