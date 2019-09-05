import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//封装函数
var fun = function(obj) {
	return function(state, action) {
		//@@redux/INIT默认状态下的action.type,它加的有随机参数。
		//自定义的action.type不要包含@@redux/INIT，否组会影响结果。
		var reg = RegExp("@@redux/INIT");
		if (reg.test(action.type)) {
			//此处的返回值是第一次执行时的返回值，返回了data的对象
			return obj.data;
		} else {
			//Object.assign返回合并数组，并返回新数组，被重新赋值给state仓库。
			return Object.assign({}, state, obj.mutations[action.type](state));
		}
	};
};
//createStore是函数执行一次，返回值就是state
let store = createStore(
	fun({
		//data是初始state仓库的值；
		data: {
			name: "jos",
			age: 20
		},
		//mutations是定义的可以改变state里面的值的方法
		mutations: {
			changeName() {
				return {
					name: "son"
				};
			},
			changeAge() {
				return {
					age: "state.age+1"
				};
			}
		}
	})
);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
