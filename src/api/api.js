import axios from 'axios';

const API_KEY = '98afb7ea157a87d81ec88a6ff53a386a';
const API_ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGFmYjdlYTE1N2E4N2Q4MWVjODhhNmZmNTNhMzg2YSIsInN1YiI6IjY0MmIzY2E3ZjFiNTcxMDBmNGMxNDJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-p5IXtBi_ll9Vh8MPZCGX5cQ9g4fJBX3hiqDu0KFhw`;

const urlDetallesPelicula = (idPelicula) => {
    return `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`;
}