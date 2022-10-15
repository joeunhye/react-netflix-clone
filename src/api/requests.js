const requests = {
	fetchNowPlaying: "movie/now_playing",
	fetchNetflixOriginals: "/discover/tv?with_networks=213",
	fetchTrending: "/trending/all/week",
	fetchTopRated: "/movie/top_rated",
	fetchActionMovies: "/discover/movie?with_genres=28",
	fetchComedyMovies: "/discover/movie?with_genres=35",
	fetchHorrorMovies: "/discover/movie?with_genres=27",
	fetchRomanceMovies: "/discover/movie?with_genres=10749",
	fetchDocumentaries: "/discover/movie?with_genres=99",
};
export default requests;
// https://api.themoviedb.org/3/movie/now_playing?api_key=52b9d7c6a2c4c62e4cbe839dc1f514c8&language=ko-KR&page=1
