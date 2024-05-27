import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kikuuboonline.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('772000111').click();
  await page.getByPlaceholder('772000111').fill('786263898');
  await page.locator('#password').click();
  await page.locator('#password').fill('CHes1@kikonl');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Obeke vicent' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});