const users = new Map();

/**
 * @param {any} userid
 */
export function getUser(userid) {
	if (!users.get(userid)) {
		users.set(userid, [{
			id: crypto.randomUUID(),
		}]);
	}

	return users.get(userid);
}

/**
 * @param {any} userid
 * @param {any} name
 * @param {any} email
 */
export function createUser(userid, name, email) {
	const posts = users.get(userid);

	posts.push({
		id: crypto.randomUUID(),
		name: name,
        mail: email,
	});
}

/**
 * @param {any} userid
 * @param {any} id
 */
export function deleteUser(userid, id) {
	const posts = users.get(userid);
	const index = posts.findIndex((/** @type {{ id: any; }} */ post) => post.id === id);

	if (index !== -1) {
		posts.splice(index, 1);
	}
}