export const getFormData = formElm => {
	const formData = new FormData(formElm);
	const data = {};

	for(const [key, value] of formData) {
		data[key] = value;
	}

	return data;
};