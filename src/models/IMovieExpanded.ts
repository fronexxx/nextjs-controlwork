import {IProduction_countries} from "@/models/IProduction_countries";
import {IBelongs_to_collection} from "@/models/IBelongs_to_collection";
import {IGenres} from "@/models/IGenres";
import {IProduction_companies} from "@/models/IProduction_companies";
import {ISpoken_language} from "@/models/ISpoken_language";

export interface IMovieExpanded {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongs_to_collection;
    budget: number;
    genres: IGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProduction_companies[];
    production_countries: IProduction_countries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpoken_language[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
