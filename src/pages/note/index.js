import React, { useState } from "react";
import styles from "./index.module.less";
import { Tabs } from "antd";
import NoteMain from "./main";
import NoteDetail from "./noteDetail";
const TabPane = Tabs.TabPane;

const NotePage = () => {
	const [activeKey, setActiveKey] = useState("main");
	const [activeItem, setActiveItem] = useState("main");
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<Tabs renderTabBar={() => <div></div>} activeKey={activeKey}>
					<TabPane key="main">
						<NoteMain
							itemClick={name => {
								setActiveItem(name);
								setActiveKey("detail");
							}}
							forceRender={true}
						></NoteMain>
					</TabPane>
					<TabPane key="detail">
						<NoteDetail
							jumpToList={() => {
								setActiveKey("main");
							}}
							name={activeItem}
						></NoteDetail>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default NotePage;
