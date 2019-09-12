import React, { useEffect, useMemo } from "react";
// import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { parseRoute } from "./../../parseRoute";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./actions";
import { Spin, Layout, Menu } from "antd";
const { Header, Content } = Layout;

const MAIN_DATA = "MAIN_DATA";

const IndexPage = props => {
	const { routes, history } = props;
	const content = useMemo(() => parseRoute(routes));
	const dispatch = useDispatch();
	console.log(routes);
	const localState = useSelector(state => ({
		data: state.data[MAIN_DATA] ? state.data[MAIN_DATA] : [],
		getting: state.loading[MAIN_DATA] ? state.loading[MAIN_DATA] : false
	}));
	const { getting } = localState;
	useEffect(() => {
		dispatch(getUserData(MAIN_DATA));
	}, [dispatch]);

	// 菜单单击事件
	const handleClick = e => {
		history.push(e.key);
	};
	return (
		<Layout>
			<Header>
				<Menu onClick={handleClick} mode="horizontal">
					{routes.map(route => (
						<Menu.Item key={route.path}>{route.title}</Menu.Item>
					))}
				</Menu>
			</Header>
			<Content>{content}</Content>
		</Layout>
	);
};

export default withRouter(IndexPage);
