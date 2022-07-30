import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img className="logo_imagen" src="" />
			</div>

			<div className="menu">
				<Link className="items" to={`/`}>
					Home
				</Link>
				<Link className="items" to={`/characters`}>
					Characters
				</Link>
				<Link className="items" to={`/planets`}>
					Planets
				</Link>
			</div>
		</nav>
	);
};
