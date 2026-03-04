import MovieCard from "@/components/MovieComponents/MovieCard";
import '../../css/MovieList.css';
import {FC} from "react";
import {getMovies, getMoviesByGenre, searchMovies} from "@/services/api.service";

interface Props {
    searchParams: {
        with_genres?: string;
        page: number;
        query?: string;
    };
}



export const MoviesList: FC<Props> = async ({searchParams}) => {

    const {with_genres, page, query} = searchParams;

    let movies;

    if (query && with_genres){
        movies = await searchMovies(query, with_genres);
    }else if (with_genres){
        movies = await getMoviesByGenre(with_genres, page);
    }
    else if (query){
        movies = await searchMovies(query, undefined);
    }else {
        movies = await getMovies(page)
    }

    return (
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
