import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";

export default function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		//현재 상영중인 영화 정보 가져오기
		const request = await axios.get(requests.fetchNowPlaying);

		//여러 영화 중 하나의 ID를 랜덤으로 가져오기
		const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

		//특정 영화의 더 상세한 정보 가져오기
		const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
			params: { append_to_response: "videos" },
		});
		console.log(movieDetail);
		setMovie(movieDetail);
	};
	console.log(movie.overview?.length);
	return (
		<header className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
			<div className="banner__contents">
				<h1 className="banner__title">{movie.title || movie.original_title}</h1>

				<div className="banner__buttons">
					<button className="banner__button play">Play</button>
					<button className="banner__button info">More Information</button>
				</div>

				<h2 className="banner__description">{movie.overview?.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}</h2>
				<div className="banner--fadeBottom"></div>
			</div>
		</header>
	);
}
