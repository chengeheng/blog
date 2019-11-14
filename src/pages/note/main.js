import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.less";
import Loading from "cgh-ui/components/Loading";
import NoteCard from "./components/nodeCard";
import CopyRight from "./components/copyRight";
import { getNoteList } from "./actions";

const NOTE_LIST = "NOTE_LIST";

const NoteMain = _ => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		list: state.data[NOTE_LIST] ? state.data[NOTE_LIST] : [],
		getting: state.loading[NOTE_LIST] > 0
	}));
	const { getting, list } = localState;
	const getGrid = useCallback(() => {
		dispatch(getNoteList(NOTE_LIST));
	}, [dispatch]);
	useEffect(() => {
		getGrid();
	}, [getGrid]);

	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<div className={styles.mian_note}>
					<Loading loading={getting}>
						{list.map((item, index) => (
							<NoteCard key={index + 1} data={item} />
						))}
					</Loading>
				</div>
			</div>
			<div className={styles.copyright}>
				<CopyRight />
			</div>
		</div>
	);
};

export default NoteMain;
