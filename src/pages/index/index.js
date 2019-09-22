import React, { useState, useEffect, useMemo } from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { parseRoute } from "parseRoute";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./actions";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;

const MAIN_DATA = "MAIN_DATA";

const IndexPage = props => {
	const [selectedKey, setSelectedKey] = useState("/home"); // 选中key

	const { routes, history } = props;
	const content = useMemo(() => parseRoute(routes), [routes]);
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		data: state.data[MAIN_DATA] ? state.data[MAIN_DATA] : [],
		getting: state.loading[MAIN_DATA] ? state.loading[MAIN_DATA] : false
	}));
	const { getting } = localState;
	useEffect(() => {
		// dispatch(getUserData(MAIN_DATA));
		setSelectedKey(window.location.pathname);
	}, [dispatch]);

	// 菜单单击事件
	const handleClick = key => {
		history.push(key);
		setSelectedKey(key);
	};
	return (
		<div className={styles.layout}>
			<div className={styles.main}>
				<div className={styles.logo}>CGH</div>
				<div className={styles.blank}></div>
				<div className={styles.menu}>
					{routes.map(item => (
						<div
							key={item.path}
							className={
								item.path == selectedKey
									? styles.menu_item_selected
									: styles.menu_item
							}
						>
							<div
								onClick={() => handleClick(item.path)}
								className={styles.menu_name}
							>
								{item.title}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.body}>{content}</div>
		</div>
	);
};

export default withRouter(IndexPage);
