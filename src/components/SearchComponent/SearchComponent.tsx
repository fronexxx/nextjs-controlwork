'use client'

import {ChangeEvent, useState} from "react";
import '../../css/Search.css';
import {useRouter, useSearchParams} from "next/navigation";

const SearchComponent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    const [value, setValue] = useState(query);


    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = new URLSearchParams(searchParams.toString());

        if (value.trim() === ''){
            params.delete('query');
        }else {
            params.set('query', value);
        }

        params.set('page', '1');

        const genreId = searchParams.get('with_genres');
        if (genreId) {
            params.set('with_genres', genreId);
        }

        router.push(`/?${params.toString()}`);
    };

    const handleClear = () => {
        const params = new URLSearchParams(searchParams.toString());

        setValue('')
        params.delete('query');

        params.set('page', '1');
        router.push(`/?${params.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Search Movie By Name..."
                onChange={(e) => setValue(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
            <button type="button" title={'clear input'} onClick={handleClear} className="clear-button">Clear</button>
        </form>

    );
};

export default SearchComponent;
