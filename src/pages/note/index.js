import React, { useEffect } from "react";
import styles from "./index.module.less";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getNote } from "./actions";
import NoteMain from "./main";
import NoteDetail from "./noteDetail";
const TabPane = Tabs.TabPane;

const NotePage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<Tabs renderTabBar={() => <div></div>}>
					<TabPane key="main">
						<NoteMain forceRender={true}></NoteMain>
					</TabPane>
					<TabPane key="detail">
						<NoteDetail></NoteDetail>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default NotePage;
