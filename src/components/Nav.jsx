import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			console.log(window.scrollY);
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<nav className={`nav ${show && "nav__black"}`}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="Netflix logo" className="nav__logo" onClick={() => window.location.reload()} />
			<img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile img" className="nav__profile" />
		</nav>
	);
};

export default Nav;
