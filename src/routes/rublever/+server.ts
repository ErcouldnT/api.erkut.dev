import { json } from '@sveltejs/kit';
import gecko from '$lib/coin/gecko';

export async function GET() {
	const res = await gecko.simplePrice({ vs_currencies: 'try,rub', ids: 'usd' });
	const oneRub = res.usd.rub / res.usd.try;

	return json({
		try: 1,
		rub: oneRub.toFixed(2)
	});
}
