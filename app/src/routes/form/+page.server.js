import * as db from '$lib/database/data.js';
import * as users from '$lib/database/dataForm.js';

// @ts-ignore
export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}
	return {
		posts: db.getUser(id)
	};
}

export const actions = {
	// @ts-ignore
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		users.createUser(cookies.get('userid'), data.get('name'), data.get('email'));
	}, 
	// @ts-ignore
	createtitle: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTitle(cookies.get('userid'), data.get('title'));
	},
	// @ts-ignore
	deletetitle: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteUser(cookies.get('userid'), data.get('id'));
	}
};