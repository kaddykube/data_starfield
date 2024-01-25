import { writable } from 'svelte/store';

export const starCount = writable(0);
export const coordsPen = writable({x: 50, y: 50});
