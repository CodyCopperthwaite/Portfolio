import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { catalogue } from '$lib/stores';


const normalizeTitle = (value) =>
	value
		.trim()
		.replace(/\s+/g, ' ')
		.toLowerCase();

/** @type {import('./$types').PageLoad} */
export function load({ params }) 
{
	let title = params.title;

	try {
		title = decodeURIComponent(params.title);
	} catch {
		// keep original if decoding fails
	}

	const allItems = get(catalogue);
	let item = allItems.find((i) => i.title === title);

	if (!item) {
		const normalizedTitle = normalizeTitle(title);
		item = allItems.find((i) => normalizeTitle(i.title) === normalizedTitle);
	}

	if (!item) {
		throw error(404, 'Catalogue item not found');
	}

	return { item };
}