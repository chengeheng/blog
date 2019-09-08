import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { setPageTitle, setInfoList } from "./store/actions.js";

const App = props => {
	console.log(props);
	useEffect(
		_ => {
			console.log("props", props);
			let { setPageTitle } = props;

			// 触发setPageTitle action
			setPageTitle("新的标题");
		},
		[props]
	);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = state => {
	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList
	};
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPageTitle(data) {
			// 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
			dispatch(setPageTitle(data));
			// 执行setPageTitle会返回一个函数
			// 这正是redux-thunk的所用之处:异步action
			// 上行代码相当于
			/*dispatch((dispatch, getState) => {
			  dispatch({ type: 'SET_PAGE_TITLE', data: data })
		  )*/
		},
		setInfoList(data) {
			dispatch(setInfoList(data));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
