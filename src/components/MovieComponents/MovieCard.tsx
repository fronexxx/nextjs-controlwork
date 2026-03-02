import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import {urls} from "@/urls/url";
import '../../css/MovieCard.css';

interface MovieComponentProps {
    movie: IMovie
}

const MovieCard = ({movie}: MovieComponentProps) => {
    return (
        <div className="movie-card">
            <Link href={`/movies/${movie.id}`} className="movie-card__link">
                <div className="movie-card__image-wrapper">
                    <img
                        className="movie-card__poster"
                        src={urls.posterUrl + movie.poster_path}
                        alt={movie.title}
                    />
                </div>

                <div className="movie-card__content">
                    <h2 className="movie-card__title">{movie.title}</h2>

                    <p className="movie-card__date">
                        📅 {movie.release_date}
                    </p>

                    <div className="movie-card__rating">
                        ⭐ {movie.vote_average.toFixed(1)}
                        <span className="movie-card__votes">
          ({movie.vote_count} votes)
        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
