'use client'

import {IGenres} from "@/models/IGenres";
import {ChangeEvent, FC} from "react";
import '../../css/Header.css';
import {useRouter, useSearchParams} from "next/navigation";

interface Props {
    genres: IGenres[];
}


const SelectGenre: FC<Props> = ({genres}) => {

    const router = useRouter();

    const searchParams = useSearchParams();
    const selectedGenre = searchParams.get('with_genres') || '';

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const genreId = e.target.value;

        router.push(`/?with_genres=${genreId}`);
    };

    return (
        <div className="selected-genre">
            <select className="selected-genre__select" value={selectedGenre} onChange={onChange}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>

            <div className="selected-genre__user">
                <p className="selected-genre__username">Igor Botsii</p>
                <img
                    className="selected-genre__avatar"
                    src="https://www.shutterstock.com/image-illustration/avatar-vector-illustration-gender-neutral-260nw-2587614499.jpg"
                    alt="user-info"
                />
            </div>
        </div>
    );
};

export default SelectGenre;
