import * as formApi from '$lib/database/dataForm.js';

// @ts-ignore
export function load({ cookies }) {
	let id = cookies.get('userid');
	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}
	return {
		posts: formApi.getUser(id)
	};
}

export const actions = {
	// @ts-ignore
	create: async ({ cookies, request }) => {
		const form = await request.formData();
		formApi.createUser(cookies.get('userid'), form.get('name'), form.get('email'));
	}, 
}; 


/* 
export async function POST(event: RequestEvent) {
    const { request, cookies } = event;
    const { name, email } = await request.json();
	const form = { name, email };
	formApi.createUser(cookies.get('userid'), name, email);

    return {form};
} */