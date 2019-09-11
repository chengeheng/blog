import React, { useEffect, useMemo } from "react";
// import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { parseRoute } from "./../../parseRoute";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./actions";
import { Spin, Layout } from "antd";
const { Header, Content } = Layout;

const MAIN_DATA = "MAIN_DATA";

const IndexPage = props => {
	const { routes } = props;
	const content = useMemo(() => parseRoute(routes));
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
		<Layout>
			<Header></Header>
			<Content>{content}</Content>
		</Layout>
	);
};

export default withRouter(IndexPage);
