export function getOrg(org) {
	return fetch(`https://api.github.com/orgs/${org}`).then(res => {
		if (res.status === 403) {
			throw new Error('Github API rate limit reached')
		}
		return res.json();
	})
}

export function getUser(user) {
	return fetch(`https://api.github.com/users/${user}`).then(res => {
		if (res.status === 403) {
			throw new Error('Github API rate limit reached')
		}
		return res.json();
	})
}

export function fetchEndpoint(url) {
	return fetch(clean(url)).then(res => {
		return res.json();
	})
}

function clean(url) {
	let filter = /{\/*.*}$/gm
	return url.replace(filter, '');
}
