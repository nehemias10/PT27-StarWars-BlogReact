import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";

import { Characters } from "./views/characters";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Detalle from "./views/detalle";
import Planets from "./views/planets";

import DetallePlanets from "./views/detalleplanets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="main">
			<BrowserRouter basename={basename}>
				<div id="barra">
					<Navbar />
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/characters">
						<Characters />
					</Route>
					<Route exact path="/planets">
						<Planets />
					</Route>

					<Route exact path="/detalle/:id">
						<Detalle />
					</Route>
					<Route exact path="/detallePlanets/:id">
						<DetallePlanets />
					</Route>

					<Route>
						<h1>Error 404!!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
