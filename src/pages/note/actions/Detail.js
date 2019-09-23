import cghFetch from "utils/request";
export const getMdNote = (stateId, name) => () =>
	cghFetch(stateId, {
		url: `/notes/detail/get?name=${name}&type=md`,
		method: "GET"
	});
