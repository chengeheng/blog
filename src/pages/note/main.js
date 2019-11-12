import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";
import { Button } from "antd";
import Loading from "cgh-ui/components/Loading";
import NoteItem from "./components/noteItem";
import NoteCard from "./components/nodeCard";
import NewNote from "./components/newNote";
import { getNote, getNoteList } from "./actions";

const MAIN_NOTE = "MAIN_NOTE";
const NOTE_LIST = "NOTE_LIST";

const NoteMain = _ => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const localState = useSelector(state => ({
		dataSource: state.data[MAIN_NOTE] ? state.data[MAIN_NOTE] : [],
		list: state.data[NOTE_LIST] ? state.data[NOTE_LIST] : [],
		getting: !state.data[MAIN_NOTE]
	}));
	const { isAdmin } = useSelector(state => state.user);
	const { dataSource, getting, list } = localState;
	const getGrid = useCallback(() => {
		dispatch(getNote(MAIN_NOTE));
		dispatch(getNoteList(NOTE_LIST));
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
					<Loading loading={getting}>
						{dataSource.map((item, index) => (
							<NoteItem
								key={index + 1}
								index={index + 1}
								id={item._id}
								{...item}
							></NoteItem>
						))}
						{list.map((item, index) => (
							<NoteCard key={index + 1} data={item} />
						))}
					</Loading>
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
