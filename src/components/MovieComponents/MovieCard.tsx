import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import {urls} from "@/urls/url";
import '../../css/MovieCard.css';
import StarsComponent from "@/components/StarsComponent/StarsComponent";
import {getGenres} from "@/services/api.service";
import BadgeComponent from "@/components/BadgeComponent/BadgeComponent";
import Image from "next/image";

interface MovieComponentProps {
    movie: IMovie
}

const MovieCard = async ({movie}: MovieComponentProps) => {
    const AllGenres = await getGenres();

    const movieGenres = movie.genre_ids?.map(id => AllGenres.find(genre => genre.id === id)?.name)
        .filter(Boolean);

    return (
        <div className="movie-card">
            <Link href={`/movies/${movie.id}`}>
                    <Image
                        className="movie-card__poster"
                        src={urls.posterUrl + movie.poster_path}
                        alt={movie.title}
                        width={300}
                        height={450}
                    />


                <div className="movie-card__info">
                    <h2 className="movie-card__title">{movie.title}</h2>

                    <p className="movie-card__date">
                        📅 {movie.release_date}
                    </p>

                    <div className="movie-card__rating">
                        <StarsComponent rating={movie.vote_average}/>
                        <span className="movie-card__votes">
          ({movie.vote_count} votes)
        </span>
                    </div>
                    <div className='movie-card__genres'>
                        {movieGenres?.map((name, index) => (
                            <BadgeComponent key={index} name={name!}/>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
