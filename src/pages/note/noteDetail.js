import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./noteDetail.module.less";
import { useSelector, useDispatch } from "react-redux";
import { getMdNote } from "./actions";
import marked from "marked";
import hljs from "highlight.js";
import { Spin, Button } from "antd";
import { ReactComponent as PreviousSVG } from "images/note/previous.svg";
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
	const { match, history } = props;

	const { params } = match;
	const { id } = params;
	const localState = useSelector(state => ({
		data: state.data[DETAIL_NOTE] ? state.data[DETAIL_NOTE] : "",
		getting: !state.data[DETAIL_NOTE]
	}));
	const { data, getting } = localState;
	useEffect(() => {
		dispatch(getMdNote(DETAIL_NOTE, id));
	}, [dispatch, id, props]);

	return (
		<div className={styles.main}>
			<div className={styles.toolBar}>
				<PreviousSVG
					className={styles.previous}
					onClick={() => {
						// history.goBack();
						history.push("/note");
					}}
				>
					返回
				</PreviousSVG>
			</div>
			<div className={styles.body}>
				<Spin spinning={getting}>
					<div
						className="content-md"
						dangerouslySetInnerHTML={{
							__html: marked(data)
						}}
					/>
				</Spin>
			</div>
		</div>
	);
};

export default withRouter(NoteDetail);
