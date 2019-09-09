import React from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./actions";

const MAIN_DATA = "MAIN_DATA";

const IndexPage = props => {
	const dispatch = useDispatch();
	const localState = useSelector(state => {
		console.log(state);
		return {
			...(state.data[MAIN_DATA] ? state.data[MAIN_DATA] : {})
		};
	});
	console.log(localState);
	const clickHandle = () => {
		dispatch(getUserData(MAIN_DATA));
	};
	return (
		<div>
			<Button type="primary" onClick={clickHandle}>
				啦啦啦
			</Button>
		</div>
	);
};

export default withRouter(IndexPage);
