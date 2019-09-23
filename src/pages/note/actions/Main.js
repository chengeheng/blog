import cghFetch from "utils/request";
export const getNote = stateId => () =>
	cghFetch(stateId, {
		url: "/notes/list",
		method: "GET"
	});
