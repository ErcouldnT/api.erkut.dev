import { expect, test } from '@playwright/test';

test('api is live', async ({ request }) => {
	const res = await (await request.get('/')).json();
	expect(res.status).toEqual('hello');
});
