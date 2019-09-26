import React from "react";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import moment from "moment";

const NoteDetail = props => {
	const { name, summary, createTime, author, onClick, id } = props;
	console.log(id);
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<Link to={`/note/${id}`}>{name}</Link>
			</div>
			<div className={styles.middle_info}>
				<div className={styles.middle_info_time}>
					{createTime
						? moment(createTime).format("YYYY-MM-DD HH:mm:ss")
						: ""}
				</div>
				<div className={styles.middle_info_author}>{author}</div>
			</div>
			<div className={styles.body}>{summary}</div>
		</div>
	);
};

export default NoteDetail;
