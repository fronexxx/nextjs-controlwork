'use client'

import {urls} from "@/urls/url";
import '../../css/MovieInfo.css';
import {FC} from "react";
import {IMovieExpanded} from "@/models/IMovieExpanded";
import {useRouter} from "next/navigation";
import Image from "next/image";

type Props = {
    movie: IMovieExpanded
}

const MovieInfo: FC<Props> = ({movie}) => {

    const router = useRouter();


    return (
        <div className="movie-info-page" style={{backgroundImage: `url(${urls.backdropUrl + movie.backdrop_path})`}}>
            <div className="movie-info-overlay">
                <button onClick={router.back}>← Back</button>

                <div className="movie-info-container">
                    <Image className="movie-info-poster" src={urls.posterUrl + movie.poster_path} alt={movie.title} width={320} height={500}/>

                    <div className="movie-info-data">
                        <h1 className="movie-info-title">{movie.title}</h1>
                        <p className="movie-info-tagline">{movie.tagline}</p>
                        <p className="movie-info-overview">{movie.overview}</p>

                        <div className="movie-info-details">
                            <p><strong>Release:</strong> {movie.release_date}</p>
                            <p><strong>Runtime:</strong> {movie.runtime} min</p>
                            <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
                            <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                            <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
                            <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
                        </div>

                        <div className="movie-info-extra">
                            <h2>Production</h2>
                            <ul>
                                {movie.production_companies.map(pc => (
                                    <li key={pc.id}>{pc.name}</li>
                                ))}
                            </ul>

                            <h2>Countries</h2>
                            <p>{movie.production_countries.map(c => c.name).join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
