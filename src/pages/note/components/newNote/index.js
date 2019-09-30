import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { Modal, Form } from "antd";

class NewNote extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const me = this;
		const { form, visible = false, changeVisible = () => {} } = me.props;
		console.log(visible);
		return (
			<Modal
				title={"新建笔记"}
				visible={visible}
				onCancel={changeVisible}
				className={styles.main}
			></Modal>
		);
	}
}

export default Form.create()(NewNote);
