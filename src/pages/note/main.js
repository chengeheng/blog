import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";
import { Button } from "antd";
import Loading from "cgh-ui/components/Loading";
import NoteCard from "./components/nodeCard";
import NewNote from "./components/newNote";
import CopyRight from "./components/copyRight";
import { getNoteList } from "./actions";

const NOTE_LIST = "NOTE_LIST";

const NoteMain = _ => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const localState = useSelector(state => ({
		list: state.data[NOTE_LIST] ? state.data[NOTE_LIST] : [],
		getting: !state.data[NOTE_LIST]
	}));
	const { isAdmin } = useSelector(state => state.user);
	const { getting, list } = localState;
	const getGrid = useCallback(() => {
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
			<div className={styles.copyright}>
				<CopyRight />
			</div>
		</div>
	);
};

export default NoteMain;
