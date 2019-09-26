import cghFetch from "utils/request";
export const getMdNote = (stateId, id) => () =>
	cghFetch(stateId, {
		url: `/notes/detail/get?id=${id}`,
		method: "GET"
	});
