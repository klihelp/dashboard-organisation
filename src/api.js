export function getOrg(org) {
	return fetch(`https://api.github.com/orgs/${org}`).then(res => {
		return res.json();
	})
}
export function fetchEndpoint(url) {
	return fetch(url).then(res => {
		return res.json();
	})
}
