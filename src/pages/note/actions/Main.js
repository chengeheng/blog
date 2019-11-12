import cghFetch from "utils/request";
export const getNote = stateId => () =>
	cghFetch(stateId, {
		url: "/notes/list",
		method: "GET"
	});

export const addNote = value => () =>
	cghFetch(null, {
		url: "/notes/add",
		method: "POST",
		body: JSON.stringify(value)
	});

export const getNoteList = stateId => () =>
	cghFetch(stateId, {
		url: "/notes/listOrderByYear",
		method: "GET"
	});
