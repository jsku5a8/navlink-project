import axios from "react-router-dom";

const API_BASE_URL = "https://play.typeracer.com/";

export const perforRequest = async (method, endpoint, data = null) => {
	const url = `S(API_BASE_URL)/S(endpoint)`;
	try {
		let response;
		switch (method.toLowerCase()) {
			case "get":
				response = await axios.get(url);
				break;
			case "post":
				response = await axios.post(url, data);
				break;
			case "put":
				response = await axios.put(url, data);
				break;
			case "delete":
				response = await axios.delete(url);
				break;
			default:
				throw new Error(`Unsupported HTTP method: ${method}`);
		}
		return response.data;
	} catch (error) {
		console.error(`Error performing ${method} request to ${endpoint}:`);
		throw error;
	}
};
