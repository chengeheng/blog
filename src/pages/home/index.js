import React from "react";
import styles from "./index.module.less";
import Info from "./components/info";
import LatestNote from "./components/latestNote";
import CopyRight from "./components/copyRight";
import Loading from "cgh-ui/components/Loading";
const HomePage = () => {
	return (
		<div className={styles.main}>
			<Loading loading={true}>
				<div
					className={styles.left}
					onClick={() => {
						console.log("aaa");
					}}
				>
					<div className={styles.head_portrait} />
					<div className={styles.introduce}></div>
					{/* <A></A> */}
				</div>
				<div className={styles.introduction}>
					<Info className={styles.introduce_info} />
					<LatestNote className={styles.introduce_note} />
					<CopyRight className={styles.introduce_copyright} />
				</div>
			</Loading>
		</div>
	);
};

export default HomePage;
