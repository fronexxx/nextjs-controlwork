import MoviesList from "@/components/MovieComponents/MoviesList";
import HeaderComponent from "@/components/HeaderComponents/HeaderComponent";
import {type} from "node:os";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";


interface PropsPage {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>
}

export default async function Home({searchParams}: PropsPage) {

    const params = await searchParams;

    let genreId: string | undefined;
    let page: number = 1;

    if (typeof params.with_genres === 'string') {
        genreId = params.with_genres
    }

    if (typeof params.page === 'string'){
        const parsed = Number(params.page)
        if (!isNaN(parsed) && parsed > 1) {
            page = parsed;
        }
    }

  return (
    <div>
        <HeaderComponent/>
        <MoviesList searchParams={{
            with_genres: genreId,
            page
        }}/>
        <PaginationComponent/>
    </div>
  );
}
