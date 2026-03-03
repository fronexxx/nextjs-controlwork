import MovieCard from "@/components/MovieComponents/MovieCard";
import '../../css/MovieList.css';
import {FC} from "react";
import {getMovies, getMoviesByGenre} from "@/services/api.service";

interface Props {
    searchParams: {
        with_genres?: string;
        page: number
    };
}


export const MoviesList: FC<Props> = async ({searchParams}) => {

    const {with_genres, page} = searchParams;

    let movies;

    if (with_genres){
        movies = await getMoviesByGenre(with_genres, page);
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
