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
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPCdfN9y_MxN3Jn7_gJIDe20Bp-0u5IyZbg&usqp=CAU" />
					<h4>Name: {store.detallePersonaje.name}</h4>
					<p> Height: {store.detallePersonaje.height}</p>
					<p>Hair Color: {store.detallePersonaje.hair_color}</p>
					<Link className="card_botton" to={"/characters"}>
						Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Detalle;
