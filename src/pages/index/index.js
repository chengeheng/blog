import React, { useState, useEffect, useMemo } from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { parseRoute } from "parseRoute";
import { useDispatch } from "react-redux";

const IndexPage = props => {
	const [selectedKey, setSelectedKey] = useState("/home"); // 选中key
	const [contentKey, setContentKey] = useState(0);
	const { routes, menuRouters, history } = props;
	const content = useMemo(() => parseRoute(routes), [routes]);
	const dispatch = useDispatch();

	useEffect(() => {
		setSelectedKey(window.location.pathname);
	}, [dispatch]);

	// 菜单单击事件
	const handleClick = key => {
		if (props.location.pathname === key) {
			setContentKey(v => v + 1);
		} else {
			history.push(key);
			setSelectedKey(key);
		}
	};
	return (
		<div className={styles.layout}>
			<div className={styles.main}>
				<div className={styles.logo}>陈葛恒</div>
				<div className={styles.menu}>
					{menuRouters.map(item => (
						<div
							key={item.path}
							className={
								item.path === selectedKey
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
			<div className={styles.body} key={contentKey}>
				{content}
			</div>
		</div>
	);
};

export default withRouter(IndexPage);
