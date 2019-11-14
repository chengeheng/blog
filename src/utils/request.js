import store from "./../store";
import {
	UPDATE_DATA,
	FETCH_LOADING_SUCCESS,
	FETCH_LOADING_FAIL
} from "./../store/reducers";
import { isJson } from "./utils";
const request = async (stateId, getResponse, errFn) => {
	dispatch({
		type: FETCH_LOADING_SUCCESS,
		stateId,
		data: true
	});
	const { body } = await getResponse();
	if (body.code === 200) {
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
	// dispatch({
	// 	type: UPDATE_DATA,
	// 	stateId,
	// 	data: body
	// });

	setTimeout(() => {
		dispatch({
			type: FETCH_LOADING_FAIL,
			stateId,
			data: false
		});
	}, 0);

	if (body.code === 1) {
		errFn(body.message);
	}
	return body.data;
};

const dispatch = action => {
	return action.stateId !== undefined && store.dispatch(action);
};

export const cghFetch = async (
	stateId,
	{ url, method, headers = { "Content-Type": "application/json" }, body }
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

export const cghDelete = stateId => {
	dispatch({
		type: UPDATE_DATA,
		stateId,
		data: null
	});
};
