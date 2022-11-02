import { Outlet, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
	return (
		<div>
			<Nav />

			<Outlet />

			<Footer />
		</div>
	);
};

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path=":movieId" element={<DetailPage />} />
				<Route path="search" element={<SearchPage />} />
			</Route>
		</Routes>
	);
}

export default App;
//https://intrepidgeeks.com/tutorial/load-movie-information-from-tmdb
