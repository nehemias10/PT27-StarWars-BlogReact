import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img className="logo_imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
			</div>
			<Link className="items" to={`/`}>
					<img className="iconosw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"/>
				</Link>
			<div className="menu">
				
				<Link className="items me-2" to={`/characters`}>
					Characters
				</Link>
				<Link className="items" to={`/planets`}>
					Planets
				</Link>
			</div>
		</nav>
	);
};
