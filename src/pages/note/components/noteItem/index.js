import React from "react";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import moment from "moment";
import { jumpToPage } from "utils/utils";
const NoteDetail = props => {
	const { name, summary, createTime, author, id, index } = props;
	const background = "background" + (index % 3);
	return (
		<div className={styles.main}>
			<div
				className={`${styles.left} ${styles[background]}`}
				onClick={() => jumpToPage(`/notedetail?id=${id}`)}
			/>
			<div className={styles.right}>
				<div className={styles.title}>
					<Link to={`/notedetail?id=${id}`}>{name}</Link>
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
		</div>
	);
};

export default NoteDetail;
