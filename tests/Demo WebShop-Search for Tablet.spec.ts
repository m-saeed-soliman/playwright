import { test, expect } from '@playwright/test';

test('search for mobile on Demo Web Shop', async ({ page }) => {
	// Visit the website
	await page.goto('https://demowebshop.tricentis.com/');
	// Enter 'mobile' in the search bar
	await page.fill('input[name="q"]', 'Tablet');
	// Click the search button
	await page.click('input[type="submit"][value="Search"]');
	// Read the text and verify it matches the expected message
	const messageText = await page.locator('.search-results').textContent();
	expect(messageText).toContain('No products were found that matched your criteria.');
});

// Additional tests can follow here
