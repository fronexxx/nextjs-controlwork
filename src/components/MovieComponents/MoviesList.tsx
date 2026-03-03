import MovieCard from "@/components/MovieComponents/MovieCard";
import '../../css/MovieList.css';
import {FC} from "react";
import {getMovies, getMoviesByGenre} from "@/services/api.service";

interface Props {
    searchParams: {
        with_genres?: string;
        }
}


export const MoviesList: FC<Props> = async ({searchParams}) => {

    const genreId = searchParams.with_genres;

    let movies;

    if (genreId){
        movies = await getMoviesByGenre(genreId);
    }else {
        movies = await getMovies()
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
