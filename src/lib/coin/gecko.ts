import { CoinGeckoClient } from './lib/CoinGeckoClient';
import { GECKO_API_KEY } from '$env/static/private';

export default new CoinGeckoClient(
	{
		timeout: 10000,
		autoRetry: true
	},
	{
		apiKey: GECKO_API_KEY,
		isDemo: true
	}
);
