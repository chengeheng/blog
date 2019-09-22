import React, { useEffect } from "react";
import styles from "./index.module.less";
import { useSelector, useDispatch } from "react-redux";
import marked from "marked";
import hljs from "highlight.js";
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	}
});

const NoteDetail = () => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({}));
	useEffect(() => {
		// dispatch(getNote(DETAIL_NOTE));
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.title}>asasd</div>
			<div className={styles.middle_info}>
				<div className={styles.middle_info_time}>aaa</div>
				<div className={styles.middle_info_author}>CGH</div>
			</div>
			<div className={styles.body}>jhhkahas</div>
		</div>
	);
};

export default NoteDetail;
