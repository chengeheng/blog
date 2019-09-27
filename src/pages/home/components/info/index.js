import React from "react";
import styles from "./index.module.less";

const Info = props => {
	const { className } = props;
	return (
		<div className={`${className} ${styles.main}`}>
			<div className={styles.title}>陈葛恒的个人微博</div>
			<div className={styles.banners} />
			<div className={styles.bottom}>
				<div className={styles.bottom_name}>当前版本：</div>
				<div className={styles.bottom_version}>V1.0.0</div>
			</div>
		</div>
	);
};

export default Info;
