import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";
import { Spin, Button } from "antd";
import NoteItem from "./components/noteItem";
import NewNote from "./components/newNote";
import { getNote } from "./actions";

const MAIN_NOTE = "MAIN_NOTE";

const NoteMain = _ => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const localState = useSelector(state => ({
		dataSource: state.data[MAIN_NOTE] ? state.data[MAIN_NOTE] : [],
		getting: !state.data[MAIN_NOTE]
	}));
	const { isAdmin } = useSelector(state => state.user);
	const { dataSource, getting } = localState;

	const getGrid = useCallback(() => {
		dispatch(getNote(MAIN_NOTE));
	}, [dispatch]);
	useEffect(() => {
		getGrid();
	}, [getGrid]);
	// 打开新增笔记面板
	const addNewNote = () => {
		setVisible(true);
	};
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<div className={styles.mian_note}>
					{isAdmin && (
						<Button
							className={styles.note_add}
							onClick={addNewNote}
						>
							新增文档
						</Button>
					)}
					<Spin spinning={getting}>
						{/* <NoteItem></NoteItem> */}
						{dataSource.map((item, index) => (
							<NoteItem
								key={index + 1}
								index={index + 1}
								id={item._id}
								{...item}
							></NoteItem>
						))}
					</Spin>
					<NewNote
						visible={visible}
						changeVisible={value => {
							if (!value) {
								setVisible(false);
								getGrid();
							} else {
								setVisible(!visible);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteMain;
