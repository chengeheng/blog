import React, { useEffect } from "react";
// import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./actions";
import { Spin } from "antd";

const MAIN_DATA = "MAIN_DATA";

const IndexPage = props => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		data: state.data[MAIN_DATA] ? state.data[MAIN_DATA] : [],
		getting: state.loading[MAIN_DATA] ? state.loading[MAIN_DATA] : false
	}));
	const { getting } = localState;
	const clickHandle = () => {};
	useEffect(() => {
		dispatch(getUserData(MAIN_DATA));
	}, [dispatch]);
	return (
		<div>
			<Spin spinning={getting}>
				<Button type="primary" onClick={clickHandle}>
					啦啦啦
				</Button>
			</Spin>
		</div>
	);
};

export default withRouter(IndexPage);
