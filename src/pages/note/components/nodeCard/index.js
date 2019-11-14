import React from "react";
import styles from "./index.module.less";
import NoteItem from "./nodeItem";

// 参考https://huangyijie.com/
const NoteCard = props => {
	const { year, children = [] } = props.data;
	return (
		<div className={styles.main}>
			<div className={styles.title}>{year}</div>
			<div className={styles.body}>
				{children.map((item, index) => (
					<NoteItem data={item} key={index + 1} />
				))}
			</div>
		</div>
	);
};

export default NoteCard;
