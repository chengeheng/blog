import React from "react";
import styles from "./index.module.less";

const LatestNote = props => {
	const { className } = props;
	return <div className={`${className} ${styles.main}`}>note</div>;
};

export default LatestNote;
