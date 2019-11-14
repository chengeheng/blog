import React from "react";
import styles from "./noteItem.module.less";
import moment from "moment";
import { Link } from "react-router-dom";

const NoteItem = props => {
	const { data } = props;
	const { createTime, name, _id } = data;
	const showTime = moment(createTime).format("MMM DD");
	return (
		<div className={styles.main}>
			<div className={styles.date}>{showTime}</div>
			<div className={styles.name}>
				<Link to={`/notedetail?id=${_id}`}>{name}</Link>
			</div>
		</div>
	);
};

export default NoteItem;
