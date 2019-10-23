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
