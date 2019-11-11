import React from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.less";
import { Modal, Form, Input, Upload, Button, message } from "antd";
import moment from "moment";
import { addNote } from "../../actions/index";
const TextArea = Input.TextArea;

const NewNote = props => {
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
			const createTime = moment().valueOf();
			if (err) {
				return;
			} else {
				dispatch(
					addNote({
						...values,
						createTime
					})
				).then(_ => {
					message.success("新增成功");
					changeVisible(false);
				});
			}
		});
	};

	const uploadProps = {
		action: "/notes/detail/add"
	};

	return (
		<Modal
			title={"新建笔记"}
			visible={visible}
			onCancel={changeVisible}
			onOk={handleSubmit}
			className={styles.main}
			maskClosable={false}
		>
			<Form {...formItemLayout}>
				<Form.Item label="标题">
					{getFieldDecorator("name", {
						rules: [
							{
								required: true,
								message: "标题是必填项"
							}
						]
					})(<Input placeholder="请输入标题" />)}
				</Form.Item>
				<Form.Item label="类型">
					{getFieldDecorator("type", {
						rules: [
							{
								required: true,
								message: "类型是必填项"
							}
						]
					})(<Input placeholder="请输入类型" />)}
				</Form.Item>
				<Form.Item label="摘要">
					{getFieldDecorator("summary", {})(
						<TextArea placeholder="请输入摘要" />
					)}
				</Form.Item>
				<Form.Item label="md文档">
					<Upload {...uploadProps}>
						<Button>上传附件</Button>
					</Upload>
				</Form.Item>
				<Form.Item label="作者">
					{getFieldDecorator("author", {
						initialValue: "CGH"
					})(<Input placeholder="请输入作者" />)}
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default Form.create()(NewNote);
