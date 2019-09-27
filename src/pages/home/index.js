import React from "react";
import styles from "./index.module.less";
import Info from "./components/info";
import LatestNote from "./components/latestNote";
import CopyRight from "./components/copyRight";
const HomePage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.head_portrait} />
				<div className={styles.introduce}></div>
			</div>
			<div className={styles.introduction}>
				<Info className={styles.introduce_info} />
				<LatestNote className={styles.introduce_note} />
				<CopyRight className={styles.introduce_copyright} />
			</div>
		</div>
	);
};

export default HomePage;
