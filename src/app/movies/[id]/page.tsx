import React, {FC} from 'react';
import MovieInfo from "@/components/MovieComponents/MovieInfo";
import {IMovieExpanded} from "@/models/IMovieExpanded";
import {getMovieById} from "@/services/api.service";

export type Props = {
    params: Promise<{id: string}>
}

const MoviePage: FC<Props> = async ({params}) => {
    const {id} = await params;
    const movie: IMovieExpanded = await getMovieById(id);
    return (
        <div>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MoviePage;
