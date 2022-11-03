const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],

			detallePersonaje: {},
			detallePlaneta: {},
			favoritos: [],
			mostrarFavoritos: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			obtenerApi: async () => {
				await fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.log("error", error));
			},
			obtenerApiPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(error => console.log("error"));
			},

			verDetalle: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePersonaje: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			verDetallePlanets: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePlaneta: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			agregarFavoritos: id => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, store.personajes[id - 1]] });
			},
			eliminarFavoritos: index => {
				const store = getStore();

				const eliminar = store.favoritos.filter((el, i) => {
					return index !== i;
				});
				console.log(eliminar);
				setStore({ favoritos: eliminar });
				console.log(store.favoritos);
			},
			setMostrarFavoritos: e => {
				const store = getStore();
				setStore({ mostrarFavoritos: !store.mostrarFavoritos });
			}
		}
	};
};

export default getState;
