import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { Modal, Form, Input, Upload, Button } from "antd";
const TextArea = Input.TextArea;

const NewNote = props => {
	const { form, visible = false, changeVisible = () => {} } = props;
	console.log(props);
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
			console.log(values);
		});
	};

	return (
		<Modal
			title={"新建笔记"}
			visible={visible}
			onCancel={changeVisible}
			onOk={handleSubmit}
			className={styles.main}
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
					{getFieldDecorator("mdFile", {})(
						<Upload name="md文档">
							<Button>上传附件</Button>
						</Upload>
					)}
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
