// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from "redux";
// 默认值
import defaultState from "./state.js";

export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_USER = "UPDATE_USER";
export const FETCH_LOADING_SUCCESS = "FETCH_LOADING_SUCCESS";
export const FETCH_LOADING_FAIL = "FETCH_LOADING_FAIL";

const dataReducer = function(state = defaultState.data, action) {
	switch (action.type) {
		case UPDATE_DATA: {
			return {
				...state,
				[action.stateId]: action.data
			};
		}

		default:
			return state;
	}
};

const userReducer = function(state = defaultState.user, action) {
	switch (action.type) {
		case UPDATE_USER: {
			return {
				...state,
				...action.data
			};
		}

		default:
			return state;
	}
};
const loadingReducer = function(state = {}, action) {
	switch (action.type) {
		case FETCH_LOADING_SUCCESS: {
			return {
				...state,
				[action.stateId]: action.data
			};
		}
		case FETCH_LOADING_FAIL: {
			return {
				...state,
				[action.stateId]: action.data
			};
		}
		default:
			return state;
	}
};
// 导出所有reducer
export default combineReducers({
	data: dataReducer,
	loading: loadingReducer,
	user: userReducer
});
