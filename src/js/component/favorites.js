import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
	const { store, actions } = useContext(Context);
	const x = store.mostrarFavoritos;

	return (
		<div className="favoritos">
			<span className="favoritos_dropdown" onClick={() => actions.setMostrarFavoritos()}>
				Favorites {store.favoritos.length}
			</span>

			<ul className={store.mostrarFavoritos ? "visible" : "oculto"}>
				{store.favoritos.map((el, index) => {
					return (
						<li key={index}>
							{el.name}
							<i onClick={() => actions.eliminarFavoritos(index)} className="far fa-trash-alt" />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Favorites;
