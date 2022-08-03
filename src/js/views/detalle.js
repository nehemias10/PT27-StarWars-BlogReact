import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const Detalle = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetalle(id);
	}, []);

	return (
		<div className="detallecyp">
			<div className="detallecharacter">
				<div className="card_item">
					<img src=""/>
					<h4>Name: {store.detallePersonaje.name}</h4>
					<p> Height: {store.detallePersonaje.height}</p>
					<p>Hair Color: {store.detallePersonaje.hair_color}</p>
					<Link className="card_botton" to={"/characters"}>
					<button type="button" class="btn btn-warning ">BACK</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Detalle;
