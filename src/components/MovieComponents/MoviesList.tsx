import {getMovies} from "@/services/api.service";
import MovieCard from "@/components/MovieComponents/MovieCard";
import {IMovie} from "@/models/IMovie";
import '../../css/MovieList.css';

export const MoviesList = async () => {
    const movies: IMovie[] = await getMovies();
    return (
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
