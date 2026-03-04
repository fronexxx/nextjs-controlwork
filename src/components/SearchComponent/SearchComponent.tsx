'use client'

import {ChangeEvent} from "react";
import {getMovies, searchMovies} from "@/services/api.service";
import '../../css/Search.css';

const SearchComponent = () => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.trim() === ''){
            getMovies(1);
        }else {
            searchMovies(value);
        }

    };

    return (
        <div>
            <input type="text" name={'search'} placeholder={'Search Movie By Name...'} onChange={onChange} className='search-input'/>
        </div>
    );
};

export default SearchComponent;
