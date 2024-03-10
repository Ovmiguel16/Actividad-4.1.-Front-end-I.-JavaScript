import { useEffect, useState } from 'react'
import style from './Detalles.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { detallesPeliculasAction } from '../../helpers/peliculasActions'


function Detalles() {
  let navigate = useNavigate();
  let location = useLocation();
  const idMovie = location.search.slice(4);

  const [dataVideo, setDataVideo] = useState({linkVideo: 'https://www.youtube.com/embed/'});
  const [loading, setLoading] = useState(false);
  
  const urlMostrarImagenPelicula = `https://image.tmdb.org/t/p/w500/${dataVideo?.poster_path}`;
  
  useEffect(() => {
    detallesPeliculasAction(idMovie, setLoading, setDataVideo);
  }, [])
  

  return (
    <div className={style.contenedor} style={{backgroundImage: `url(${urlMostrarImagenPelicula})`}}>
      
    </div>
  )
}

export default Detalles