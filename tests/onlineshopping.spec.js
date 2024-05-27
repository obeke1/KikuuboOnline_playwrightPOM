import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kikuuboonline.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('772000111').click();
  await page.getByPlaceholder('772000111').fill('786263898');
  await page.locator('#password').click();
  await page.locator('#password').fill('CHes1@kikonl');
  await page.getByRole('button', { name: 'Submit' }).click({
    clickCount: 4
  });
  await page.goto('https://kikuuboonline.com/');
  await page.getByRole('link', { name: 'Beer' }).click();
  await page.locator('div:nth-child(8) > .__proGdBozInr > .quickadd').click();
  await page.locator('#addtocartBtn').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('div:nth-child(6) > .__proGdBozInr > .quickadd').click();
  await page.locator('#addtocartBtn').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('div:nth-child(4) > .__proGdBozInr > .quickadd').click();
  await page.locator('#addtocartBtn').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Cart 6' }).click();
  await page.getByRole('button', { name: 'Proceed to checkout' }).click();
  await page.getByRole('button', { name: 'Proceed to payment' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Add Address' }).click();
  await page.locator('#area').selectOption('Kalerwe');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('Enter a nearby destination.').click();
  await page.getByPlaceholder('Enter a nearby destination.').fill('kalerwe');
  await page.getByPlaceholder('Click here to get your').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#mapNotEnable').getByRole('img').click();
  await page.locator('#mapmodal').getByLabel('Close').click();
  await page.locator('#addressmodal').click();
  await page.getByPlaceholder('Click here to get your').click();
  await page.locator('#mapNotEnable').getByRole('img').click();
  await page.getByPlaceholder('Kololo, Kampala, Uganda').click();
  await page.getByPlaceholder('Kololo, Kampala, Uganda').fill('kalerwe');
  await page.getByText('Kalerwe MarketKampala, Uganda').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('Kololo, Kampala, Uganda').click();
  await page.getByPlaceholder('Kololo, Kampala, Uganda').press('ControlOrMeta+a');
  await page.getByPlaceholder('Kololo, Kampala, Uganda').fill('l');
  await page.getByPlaceholder('Kololo, Kampala, Uganda').press('ControlOrMeta+a');
  await page.getByPlaceholder('Kololo, Kampala, Uganda').fill('kalerwe');
  await page.getByText('Kalerwe Taxi ParkKampala,').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#mapmodal').getByLabel('Close').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Proceed to payment' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});