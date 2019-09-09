// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from "redux";
// 默认值
import defaultState from "./state.js";

const UPDATE_DATA = "UPDATE_DATA";
const dataReducer = function(state = defaultState.data, action) {
	switch (action.type) {
		case UPDATE_DATA: {
			console.log(action.payload);
			return {
				...state.data,
				...action.payload
			};
		}

		default:
			return state;
	}
};
// 导出所有reducer
export default combineReducers({
	data: dataReducer
	// user: userReducer
});
