import { json } from '@sveltejs/kit';
import { CoinGeckoClient } from '$lib/coin/CoinGeckoClient';
import { GECKO_API_KEY } from '$env/static/private';

export async function GET() {
  const client = new CoinGeckoClient(
    {
      timeout: 10000,
      autoRetry: true
    },
    {
      apiKey: GECKO_API_KEY,
      isDemo: true
    }
  );

  return json(await client.ping());
}
