import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.less";

import { Spin } from "antd";
import NoteItem from "./components/noteItem";

const MAIN_NOTE = "MAIN_NOTE";

const NoteMain = () => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		getting: !state.data[MAIN_NOTE]
	}));
	const { getting } = localState;
	return (
		<div className={styles.mian_note}>
			{/* <Spin spinning={getting}></Spin> */}
			<NoteItem></NoteItem>
		</div>
	);
};

export default NoteMain;
