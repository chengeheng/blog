import React, { useState } from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import Info from "./components/info";
import LatestNote from "./components/latestNote";
import CopyRight from "./components/copyRight";
import { ReactComponent as NextSvg } from "images/home/next.svg";
import LoginModal from "./components/login";
const HomePage = props => {
	const { history } = props;
	const jumpToNote = () => {
		history.push("/note");
	};

	const [loginModalVisible, setLoginModalVisible] = useState(false);
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div
					className={styles.head_portrait}
					onClick={() => {
						setLoginModalVisible(true);
					}}
				/>
				<div className={styles.introduce}></div>
			</div>
			<div className={styles.introduction}>
				<Info className={styles.introduce_info} />
				<LatestNote className={styles.introduce_note} />
				<CopyRight className={styles.introduce_copyright} />
			</div>
			<NextSvg className={styles.next} onClick={jumpToNote} />
			<LoginModal
				visible={loginModalVisible}
				changeVisible={() => {
					setLoginModalVisible(!loginModalVisible);
				}}
			/>
		</div>
	);
};

export default withRouter(HomePage);
