const { test, expect } = require('@playwright/test');

test('API: POST searchProduct returns 200 and products', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/searchProduct', {
    form: { search_product: 'tshirt' }
  });
  expect(response.status()).toBe(200);

  const body = await response.text();
  console.log('Response:', body);

  // Optionally, check that the response contains expected product info
  expect(body.toLowerCase()).toContain('tshirt');
});
