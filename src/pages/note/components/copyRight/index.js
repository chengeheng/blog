import React from "react";
import styles from "./index.module.less";

const CopyRight = props => {
	const { className } = props;
	return (
		<div className={`${className} ${styles.main}`}>
			<div className={styles.top}> Copyright©2019</div>
			<div className={styles.bottm}> Powered by Geheng Chen</div>
		</div>
	);
};

export default CopyRight;
