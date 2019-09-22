import React, { useEffect } from "react";
import styles from "./index.module.less";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import { getNote } from "./actions";
import marked from "marked";
import hljs from "highlight.js";
import { Spin } from "antd";
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

const NoteDetail = () => {
	const dispatch = useDispatch();
	const localState = useSelector(state => ({
		data: state.data[DETAIL_NOTE] ? state.data[DETAIL_NOTE] : "",
		getting: !state.data[DETAIL_NOTE]
	}));
	const { data, getting } = localState;
	useEffect(() => {
		dispatch(getNote(DETAIL_NOTE));
	}, []);

	return (
		<Spin spinning={getting}>
			{/* <iframe
					style={{ width: "100%", height: "100%" }}
					src="http://127.0.0.1:8030/notes/get"
				></iframe> */}
			{/* <div
					style={{ width: "100%", height: "100%" }}
					dangerouslySetInnerHTML={{ __html: localState.data }}
				></div> */}
			{/* <ReactMarkdown source={localState.data} /> */}
			<div
				className="content-md"
				dangerouslySetInnerHTML={{
					__html: marked(data)
				}}
			/>
		</Spin>
	);
};

export default NoteDetail;
