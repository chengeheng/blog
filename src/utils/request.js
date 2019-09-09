import { useDispatch } from "react-redux";
import { message } from "antd";
const cghFetch = (
	stateId,
	{
		url,
		method,
		headers = { "Content-Type": "application/x-www-form-urlencoded" },
		body
	}
) => {
	fetch(url, {
		method: method,
		headers: headers,
		body: body
	})
		.then(resp => {
			console.log("resp:", resp);
		})
		.then(res => {
			console.log("res:", res);
			message.success(res);
		})
		.catch(function(e) {
			message.error(e);
		});
};

export default cghFetch;
