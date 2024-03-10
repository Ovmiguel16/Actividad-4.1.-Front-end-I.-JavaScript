import { buscadorPeliculasAPI, detallesPeliculasByID, peliculasPopularesAPI } from "../api/api"

export const peliculasPopularesAction = async (setLoading, setPeliculas) => {
    try {
        setLoading(true);
        const {data} = await peliculasPopularesAPI();
        setLoading(false);
        setPeliculas(data.results.slice(0,18))
    } catch (error) {
        console.log(error.message);
    }
}
