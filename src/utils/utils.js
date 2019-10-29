export const isJson = str => {
	try {
		JSON.parse(str);
		return true;
	} catch (err) {
		return false;
	}
};

export const encodeObjectToUrl = query => {
	return JSON.stringify(query)
		.replace(/:/g, "=")
		.replace(/"/g, "")
		.replace(/,/g, "&")
		.match(/\{([^)]*)\}/)[1];
};

export const jumpToPage = (url, params = {}) => {
	// props.history.push(`/threat?data=${data}`);
	let paramsUrl = encodeObjectToUrl(params);
	// window.location.pathname = url + (paramsUrl ? `?${paramsUrl}` : "");
	window.history.pushState(
		null,
		null,
		url + (paramsUrl ? `?${paramsUrl}` : "")
	);
	// window.history.go(0);
	window.location.href = url + (paramsUrl ? `?${paramsUrl}` : "");
};

// 提取url中的解析字符串
export const getUrlParamHash = () => {
	let url = window.location.href;
	let str = url.split("?")[1];
	let items = str.split("&");
	let result = {};
	let res = {};
	let len = items.length;
	for (var i = 0; i < len; ++i) {
		res = items[i].split("=");
		result[res[0]] = res[1];
	}
	return result;
};
