'use client'

import {useRouter, useSearchParams} from "next/navigation";
import '../../css/Pagination.css';

const PaginationComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page') || 1);
    const genreId = searchParams.get('with_genres');
    const query = searchParams.get('query');

    const isSearchOnly = query && !genreId;

    const updatedPage = (newPage: number) => {
        if (isSearchOnly) {
            return null
        }

        const params = new URLSearchParams(searchParams.toString());

        params.set('page', newPage.toString())

        if (genreId) {
            params.set('with_genres', genreId)
        }

        router.push(`/?${params.toString()}`);
        window.scrollTo({top: 0, behavior: "smooth"})
    };


    const onPrevClick = () => {
        updatedPage(currentPage - 1);
    };
    const onNextClick = () => {
        updatedPage(currentPage + 1);
    };
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={onPrevClick}
                disabled={currentPage === 1}
            >
                prev
            </button>
            <span className="pagination__current">{currentPage}</span>
            <button
                className="pagination__button"
                onClick={onNextClick}
                disabled={query !== null || currentPage === 500}
            >
                next
            </button>
        </div>
    );
};

export default PaginationComponent;
