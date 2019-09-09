// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from "redux";
// 默认值
import defaultState from "./state.js";

// const randomString = () =>
//     Math.random()
//         .toString(36)
//         .substring(7)
//         .split("")
//         .join(".");

// const createActionType = chain => `@@${chain.join("/")}_${randomString()}`;

// export const TYPES = {
//     SESSION: {
//         SET: createActionType(["SESSION", "SET"]),
//         CHECK: createActionType(["SESSION", "CHECK"])
//     },
//     USER: {
//         SET: createActionType(["USER", "SET"])
//     },
//     FETCH: {
//         SUCCESS: createActionType(["FETCH", "SUCCESS"]),
//         ERROR: createActionType(["FETCH", "ERROR"])
//     },
//     LOADING: {
//         MASK: createActionType(["LOADING", "MASK"]),
//         UNMASK: createActionType(["LOADING", "UNMASK"])
//     },
//     CONFIG: {
//         SET: createActionType(["CONFIG", "SET"])
//     }
// };

// // 一个reducer就是一个函数
// const dataReducer = (state = defaultState.data, action) => {
//     switch (action.type) {
//         case TYPES.FETCH.SUCCESS:
//             return {
//                 ...state,
//                 [action.stateId]: action.data
//             };
//         case TYPES.FETCH.ERROR:
//             return {
//                 ...state,
//                 [action.stateId]: null
//             };
//         default:
//             return state;
//     }
// };
// const userReducer = (state = defaultState.user, action) => {
//     switch (action.type) {
//         case TYPES.USER.SET:
//             return { ...action.user };
//         default:
//             return state;
//     }
// };

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
