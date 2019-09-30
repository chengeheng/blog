import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";
import { userData } from "utils/constant";
import { Spin, Button } from "antd";
import NoteItem from "./components/noteItem";
import NewNote from "./components/newNote";
import { getNote } from "./actions";

const MAIN_NOTE = "MAIN_NOTE";

const NoteMain = _ => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const { isAdmin } = userData;
	const localState = useSelector(state => ({
		dataSource: state.data[MAIN_NOTE] ? state.data[MAIN_NOTE] : [],
		getting: !state.data[MAIN_NOTE]
	}));
	const { dataSource, getting } = localState;
	useEffect(() => {
		dispatch(getNote(MAIN_NOTE));
	}, [dispatch]);
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
								id={item._id}
								{...item}
							></NoteItem>
						))}
					</Spin>
					<NewNote
						visible={visible}
						changeVisible={() => {
							setVisible(!visible);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteMain;
