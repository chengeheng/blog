import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";

import { Spin, Button } from "antd";
import NoteItem from "./components/noteItem";

import { getNote } from "./actions";

const MAIN_NOTE = "MAIN_NOTE";

const NoteMain = props => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		dataSource: state.data[MAIN_NOTE] ? state.data[MAIN_NOTE] : [],
		getting: !state.data[MAIN_NOTE]
	}));
	const { dataSource, getting } = localState;
	useEffect(() => {
		dispatch(getNote(MAIN_NOTE));
	}, []);
	console.log(dataSource);
	return (
		<div className={styles.mian_note}>
			<Button className={styles.note_add}>新增文档</Button>
			<Spin spinning={getting}>
				{/* <NoteItem></NoteItem> */}
				{dataSource.map((item, index) => (
					<NoteItem
						key={index + 1}
						id={item._id}
						{...item}
					></NoteItem>
				))}
			</Spin>
		</div>
	);
};

export default NoteMain;
