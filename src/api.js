import axios from 'axios';

const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d7da347e5d2991c51568ab07a8256978&language=ru-Ru&page=1';


export const getMovies = () => axios.get(url);
