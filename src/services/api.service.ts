import {urls} from "@/urls/url";
import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovie} from "@/models/IMovie";
import {IMovieExpanded} from "@/models/IMovieExpanded";
import {IGenres} from "@/models/IGenres";

const api_key = `?api_key=${urls.API}`

export const getMovies = async (page: number): Promise<IMovie[]> => {
     const {results}: IMovieResponse =  await fetch(urls.BASE_URL + '/discover/movie' + api_key + `&page=${page}`)
        .then((response) => response.json())
    return results;
};

export const getMovieById = async (id: string): Promise<IMovieExpanded> => {
    return await fetch(urls.BASE_URL + '/movie/' + id + api_key)
        .then((response) => response.json());
};

export const getMoviesByGenre = async (genreId: string, page: number): Promise<IMovie[]> => {
     const {results}: IMovieResponse = await fetch(urls.BASE_URL + '/discover/movie' + api_key + `&with_genres=${genreId}&page=${page}`)
        .then((response) => response.json());
     return results
};

export const getGenres = async (): Promise<IGenres[]> => {
     const {genres} = await fetch(urls.BASE_URL + '/genre/movie/list' + api_key)
        .then((response) => response.json());
    return genres;
};

export const searchMovies = async (query: string): Promise<IMovie[]> => {
    const {results}: IMovieResponse = await fetch(urls.BASE_URL + api_key + `&search/movie?query=${query}`)
        .then((response) => response.json());
    return results;
};




