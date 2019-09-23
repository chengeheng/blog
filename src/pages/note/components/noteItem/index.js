import React from "react";
import styles from "./index.module.less";

import moment from "moment";

const NoteDetail = props => {
	const { name, summary, createTime, author, onClick } = props;
	return (
		<div className={styles.main}>
			<div className={styles.title} onClick={onClick}>
				{name}
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
