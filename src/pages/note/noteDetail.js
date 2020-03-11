import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./noteDetail.module.less";
import { useSelector, useDispatch } from "react-redux";
import { getMdNote, getNoteDetail, deleteNoteDetail } from "./actions";
import marked from "marked";
import hljs from "highlight.js";
import Loading from "cgh-ui/components/Loading";
import moment from "moment";
import { getUrlParamHash } from "utils/utils";
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	}
});
const NOTE_DETAIL_MD = "NOTE_DETAIL_MD";
const NOTE_DETAIL = "NOTE_DETAIL";
const NoteDetail = props => {
	const dispatch = useDispatch();
	const { id } = getUrlParamHash();
	const localState = useSelector(state => ({
		data: state.data[NOTE_DETAIL_MD] ? state.data[NOTE_DETAIL_MD] : "",
		detail: state.data[NOTE_DETAIL] ? state.data[NOTE_DETAIL] : "",
		getting: state.loading[NOTE_DETAIL_MD] > 0
	}));
	const { data, getting, detail } = localState;
	useEffect(() => {
		dispatch(getNoteDetail(NOTE_DETAIL, id));
		dispatch(getMdNote(NOTE_DETAIL_MD, id));
		return dispatch(deleteNoteDetail(NOTE_DETAIL_MD));
	}, [dispatch, id, props]);
	const { name, createTime } = detail;
	const showTime = moment(createTime).format("MMM DD YYYY");
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<div className={styles.title_name}>{name}</div>
				<div className={styles.title_date}>{showTime}</div>
			</div>
			<div className={styles.body}>
				<Loading loading={getting}>
					<div
						className="content-md"
						dangerouslySetInnerHTML={{
							__html: marked(data)
						}}
					/>
				</Loading>
			</div>
		</div>
	);
};

export default withRouter(NoteDetail);
