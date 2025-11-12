const { test, expect } = require('@playwright/test');

test('API 1: Get All Products List', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/productsList');
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log('Products List:', data);

  // Optionally, assert products list is present
  expect(data).toHaveProperty('products');
});
 