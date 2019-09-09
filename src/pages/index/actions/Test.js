import cghFetch from "./../../../utils/request";
export const getUserData = stateId =>
	cghFetch(stateId, {
		url: "localhost:8030/users/loadData",
		method: "GET"
	});
