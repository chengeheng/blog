import React from "react";
import { Switch } from "antd";
import styles from "./index.module.less";
const HomePage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.head_portrait} />
				<div className={styles.introduce}></div>
			</div>
			<div className={styles.introduction}>introduction</div>
		</div>
	);
};

export default HomePage;
