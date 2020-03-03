import React from "react";
import styles from "./index.module.less";

const CopyRight = props => {
	const { className } = props;
	return (
		<div className={`${className} ${styles.main}`}>
			<div className={styles.top}>
				{" "}
				Copyright©2019 Powered by Geheng Chen
			</div>
			<div className={styles.bottom}>
				工信部备案：
				<a
					className={styles.bottom_a}
					rel="noopener noreferrer"
					href="http://www.beian.miit.gov.cn"
					target="_blank"
				>
					苏ICP备19053625号
				</a>
			</div>
		</div>
	);
};

export default CopyRight;
