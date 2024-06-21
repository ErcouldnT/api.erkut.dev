import { json } from '@sveltejs/kit';
import gecko from '$lib/coin/gecko';

export async function GET() {
	return json(await gecko.coinList({ include_platform: true }));
}
