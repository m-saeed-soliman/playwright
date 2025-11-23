import { test, expect } from '@playwright/test';

test('search for mobile on Demo Web Shop', async ({ page }) => {
	// Visit the website
	await page.goto('https://demowebshop.tricentis.com/');
	// Enter 'mobile' in the search bar
	await page.fill('input[name="q"]', 'laptop');
	// Click the search button
	await page.click('input[type="submit"][value="Search"]');
	// Read the text and verify it contains the laptop product
	const messageText = await page.locator('.search-results').textContent();
	expect(messageText).toContain('14.1-inch Laptop');
});

// Additional tests can follow here
