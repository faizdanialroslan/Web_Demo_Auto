const { test, expect } = require('@playwright/test');

test('API 13: PUT updateAccount returns 200 and User updated!', async ({ request }) => {
  const response = await request.put('https://automationexercise.com/api/updateAccount', {
    form: {
      name: 'TestAuto001',
      email: 'TestAuto001@gmail.com',
      password: 'TestPassword1',
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '2000',
      firstname: 'Test',
      lastname: 'Auto001',
      company: 'TestCompany',
      address1: '12354 Test Street',
      address2: 'Suite 456',
      country: 'India',
      zipcode: '123456',
      state: 'TestState',
      city: 'TestCity',
      mobile_number: '1234567890'
    }
  });
  expect(response.status()).toBe(200);

  const body = await response.text();
  expect(body).toContain('User updated!');
});
