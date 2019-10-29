import cghFetch from "utils/request";
export const login = user => () =>
	cghFetch(null, {
		url: "/users/check",
		stateId: null,
		method: "POST",
		body: JSON.stringify(user)
	});
