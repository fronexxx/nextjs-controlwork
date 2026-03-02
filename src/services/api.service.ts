import {urls} from "@/urls/url";
import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovie} from "@/models/IMovie";
import {IMovieExpanded} from "@/models/IMovieExpanded";
import {IGenres} from "@/models/IGenres";

const api_key = `?api_key=${urls.API}`

export const getMovies = async (): Promise<IMovie[]> => {
     const movies: IMovieResponse =  await fetch(urls.BASE_URL + '/discover/movie' + api_key)
        .then((response) => response.json());
    return movies.results;
};

export const getMovieById = async (id: string): Promise<IMovieExpanded> => {
    return await fetch(urls.BASE_URL + '/movie/' + id + api_key)
        .then((response) => response.json());
};

export const getGenres = async (): Promise<IGenres[]> => {
     const {genres} = await fetch(urls.BASE_URL + '/genre/movie/list' + api_key, {cache: 'no-store'})
        .then((response) => response.json());
    return genres;
};





