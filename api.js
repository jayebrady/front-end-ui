export const baseURL = "https://bird-brain-nc-project.herokuapp.com";

const axios = require("axios").create({
	baseURL
	// baseURL: "http://localhost:8080"
});

export const login = (email, password) => {
	return axios.get("/login", {
		params: {
			email,
			password
		}
	});
};

export const signup = (email, password) => {
	return axios.post("/login", {
		email,
		password
	});
};

export const getFactCard = (user_id) => {
	return axios.get(`/users/${user_id}/fact_cards/`).then((res) => {
		return res.data.cards;
	});
};

export const getFactPhoto = (bird_name, image_num) => {
	return axios.get(`/photo/${bird_name}/${image_num}`).then((res) => {
		return res.data;
	});
};

export const getFactCards = (userId) => {
	return axios
		.get(`/users/${userId}/fact_cards`)
		.then(({ data }) => data.cards);
};
