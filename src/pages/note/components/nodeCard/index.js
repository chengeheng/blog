import React from "react";
import styles from "./index.module.less";
import NoteItem from "./nodeItem";
// 参考https://huangyijie.com/
const NoteCard = props => {
	console.log(props);
	const { year, children = [] } = props.data;
	return (
		<div className={styles.main}>
			<div className={styles.title}>{year}</div>
			<div className={styles.body}>
				{children.map(item => (
					<NoteItem />
				))}
			</div>
		</div>
	);
};

export default NoteCard;
