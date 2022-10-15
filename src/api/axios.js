import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "52b9d7c6a2c4c62e4cbe839dc1f514c8",
		language: "ko-KR",
	},
});

export default instance;
