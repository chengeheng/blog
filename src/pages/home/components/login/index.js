import React from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.less";
import { Modal, Form, Input } from "antd";
import { login } from "../../actions";
import { UPDATE_USER } from "store/reducers";
const LoginModal = props => {
	const dispatch = useDispatch();
	const { form, visible = false, changeVisible = () => {} } = props;
	const { getFieldDecorator } = form;
	const formItemLayout = {
		labelCol: {
			xs: { span: 4 }
		},
		wrapperCol: {
			xs: { span: 20 }
		}
	};

	const handleSubmit = _ => {
		const { validateFields } = form;
		validateFields((err, values) => {
			dispatch(login(values))
				.then(_ => {
					dispatch({
						type: UPDATE_USER,
						data: { isAdmin: true }
					});
					changeVisible();
				})
				.catch(err => {
					throw err;
				});
		});
	};

	return (
		<Modal
			title={"登录"}
			visible={visible}
			onCancel={changeVisible}
			onOk={handleSubmit}
			className={styles.main}
		>
			<Form {...formItemLayout}>
				<Form.Item label="用户名">
					{getFieldDecorator("name", {
						rules: [
							{
								required: true,
								message: "用户名是必填项"
							}
						]
					})(<Input placeholder="请输入用户名" />)}
				</Form.Item>
				<Form.Item label="密码">
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message: "密码是必填项"
							}
						]
					})(<Input.Password placeholder="请输入密码" />)}
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default Form.create()(LoginModal);
