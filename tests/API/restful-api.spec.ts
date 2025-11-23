import { test, expect } from '@playwright/test';

test('GET request to restful-api.dev', async ({ request }) => {
	// Make a GET request to the API objects endpoint
	const response = await request.get('https://api.restful-api.dev/objects');
	
	// Verify the response status is successful
	expect(response.status()).toBe(200);
	
	// Parse the JSON response
	const jsonResponse = await response.json();
	
	// Verify the response has 13 items
	expect(jsonResponse).toHaveLength(13);
	
	// Log the response for verification
	console.log('Response Status:', response.status());
	console.log('Number of items:', jsonResponse.length);
});
