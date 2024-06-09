import { json } from '@sveltejs/kit';
import { getRecommends } from '$lib/server/products.js';

export async function GET({ url }) {
	const recommends = await getRecommends(url.searchParams.get('id'));
	return json(recommends);
}
