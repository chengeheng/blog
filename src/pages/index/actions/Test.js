import cghFetch from "./../../../utils/request";
export const getUserData = stateId => () =>
	cghFetch(stateId, {
		url: "/users/loadData",
		method: "GET"
	});
