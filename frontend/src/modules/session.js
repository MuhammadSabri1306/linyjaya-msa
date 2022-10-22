const sessionNamePrefix = "liny-jaya-informatika-oms";

const getKey = key => sessionNamePrefix + "-" + key;

export const setSession = (key, val) => {
	key = getKey(key);
	window.sessionStorage.setItem(key, val);
};

export const getSession = params => {
	if(typeof params === "string") {
		const key = getKey(params);
		return window.sessionStorage.getItem(key);
	}

	if(Array.isArray(params)) {
		const data = {};
		params.forEach(key => {
			key = getKey(key);
			const val = window.sessionStorage.getItem(key);
			data[key] = val;
		});

		return data;
	}

	return null;
};