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


export const detallesPeliculasAction = async (idPelicula, setLoading, setDataVideo) => {
  try {
    setLoading(true);
    const {data} = await detallesPeliculasByID(idPelicula);
    setLoading(false);

    setDataVideo({
      poster_path: data?.poster_path, 
      linkVideo: 'https://www.youtube.com/embed/' + data?.videos.results.at(-1).key, 
      original_title: data?.original_title,
      overview: data?.overview,
      genres: data?.genres.map(genero => genero.name).join(', '),
      release_date: data?.release_date
    })
  } catch (error) {
    
  }
}
