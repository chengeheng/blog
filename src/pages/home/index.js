import React from "react";
import styles from "./index.module.less";
const HomePage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<div className={styles.banners}>banners</div>
				<div className={styles.introduction}>introduction</div>
			</div>
		</div>
	);
};

export default HomePage;
