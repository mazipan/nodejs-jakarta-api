import fetch from 'node-fetch';
import cache from 'memory-cache';

const BASE_URL = 'http://api.jakarta.go.id/v1';

interface CreateRequestParam {
	token: string;
	url: string;
	page?: number;
}

export default async function createRequest({ token, url, page }: CreateRequestParam): Promise<any> {
	const pageParam = page ? `&page=${page}` : '';
	const completeUrl = `${BASE_URL}/${url}?format=geojson${pageParam}`;

	try {
		const cachedResult = cache.get(completeUrl);
		if (cachedResult !== null) {
			return cachedResult
		} else {
			const response = await fetch(completeUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': token
				},
			});
			const data = await response.json();
			cache.put(url, data);
			return data;
		}
	} catch (error) {
		return new Error(error);
	}
}
