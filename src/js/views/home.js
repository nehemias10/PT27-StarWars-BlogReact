import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container_home">
			<h1>Start Wars </h1>
			<div className="card_home">
				<div className="card_item">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPCdfN9y_MxN3Jn7_gJIDe20Bp-0u5IyZbg&usqp=CAU" />
					<h3>Characters</h3>
					<p> Star War Characters</p>
					<Link className="card_botton" to={`/characters`}>
						More Info!
					</Link>
				</div>
				<div className="card_item">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7ZUd3ktrIPKvm1HzJx4k94PpYF6cmwPFuw&usqp=CAU" />
					<h3>Planets</h3>
					<>star wars Planets </>
					<Link className="card_botton" to={`/planets`}>
						More Info!
					</Link>
				</div>
			</div>
			<div />
		</div>
	);
};
