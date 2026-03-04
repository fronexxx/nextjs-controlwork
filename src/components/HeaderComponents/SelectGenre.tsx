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

        const params = new URLSearchParams(window.location.search);

        if (genreId === ''){
            params.delete('with_genres');
        }else {
            params.set('with_genres', genreId);
        }
        params.set('page', '1');

        router.push(`/?${params.toString()}`);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <>
            <select className="selected-genre__select" value={selectedGenre} onChange={onChange}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectGenre;
