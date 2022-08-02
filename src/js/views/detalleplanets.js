import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const DetallePlanets = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetallePlanets(id);
	}, []);

	return (
		<div className="detallecyp">
			<div className="card_detalle">
				<div className="card_item">
					<img src="" />
					<h4>Name: {store.detallePlaneta.name}</h4>
					<p> Climate: {store.detallePlaneta.climate}</p>
					<p>Orbital Period: {store.detallePlaneta.orbital_period}</p>
					<p>Terrain: {store.detallePlaneta.terrain}</p>

					<Link className="card_botton" to={"/planets"}>
						Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DetallePlanets;
