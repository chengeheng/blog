import store from "./../store";
import { UPDATE_DATA } from "./../store/reducers";
import { isJson } from "./utils";
const request = async (stateId, getResponse, errFn) => {
	const { body } = await getResponse();

	if (body.code === 0) {
		dispatch({
			type: UPDATE_DATA,
			stateId,
			data: body.data
		});
	} else {
		dispatch({
			type: UPDATE_DATA,
			stateId,
			data: null
		});
	}
	if (body.code === 1) {
		errFn(body.message);
	}
	return body.message;
};

const dispatch = action => {
	return action.stateId !== undefined && store.dispatch(action);
};

const cghFetch = async (
	stateId,
	{
		url,
		method,
		headers = { "Content-Type": "application/x-www-form-urlencoded" },
		body
	}
) =>
	await request(
		stateId,
		async () => {
			const getResponse = fetch(url, {
				method: method,
				headers: headers,
				body: body
			});
			let response = await getResponse;
			if (
				response.headers.get("content-type") &&
				response.headers.get("content-type").indexOf("json") >= 0
			) {
				body = await response.json();
			} else {
				body = await response.text();
				if (isJson(body)) {
					body = JSON.parse(body);
				} else {
					if (!response.ok) {
						body = { code: "1000" };
					}
				}
			}
			return {
				body: body
			};
		},
		err => {
			throw err;
		}
	);

export default cghFetch;
