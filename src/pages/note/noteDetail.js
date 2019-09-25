import React, { useEffect } from "react";
import styles from "./noteDetail.module.less";
import { useSelector, useDispatch } from "react-redux";
import { getMdNote } from "./actions";
import marked from "marked";
import hljs from "highlight.js";
import { Spin, Button } from "antd";
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
const DETAIL_NOTE = "DETAIL_NOTE";

const NoteDetail = props => {
	const dispatch = useDispatch();
	const { name, jumpToList } = props;
	const localState = useSelector(state => ({
		data: state.data[DETAIL_NOTE] ? state.data[DETAIL_NOTE] : "",
		getting: !state.data[DETAIL_NOTE]
	}));
	const { data, getting } = localState;
	useEffect(() => {
		dispatch(getMdNote(DETAIL_NOTE, name));
	}, [dispatch, name, props]);

	return (
		<div className={styles.main}>
			<div className={styles.toolBar}>
				<div className={styles.detail_return}>
					<Button onClick={jumpToList}>返回</Button>
				</div>
			</div>
			<Spin spinning={getting}>
				<div
					className="content-md"
					dangerouslySetInnerHTML={{
						__html: marked(data)
					}}
				/>
			</Spin>
		</div>
	);
};

export default NoteDetail;
