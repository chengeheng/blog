import React from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import Info from "./components/info";
import LatestNote from "./components/latestNote";
import CopyRight from "./components/copyRight";
import { ReactComponent as NextSvg } from "images/home/next.svg";
const HomePage = props => {
	const { history } = props;
	const jumpToNote = () => {
		history.push("/note");
	};
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.head_portrait} />
				<div className={styles.introduce}></div>
				{/* <A></A> */}
			</div>
			<div className={styles.introduction}>
				<Info className={styles.introduce_info} />
				<LatestNote className={styles.introduce_note} />
				<CopyRight className={styles.introduce_copyright} />
			</div>
			<NextSvg className={styles.next} onClick={jumpToNote} />
		</div>
	);
};

export default withRouter(HomePage);
