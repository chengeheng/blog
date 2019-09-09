// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from "redux";
// 默认值
import defaultState from "./state.js";

const ADD_TO_DATA = "ADD_TO_DATA";
const dataReducer = function(state = defaultState.data, action) {
    switch (action.type) {
        case ADD_TO_DATA: {
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
