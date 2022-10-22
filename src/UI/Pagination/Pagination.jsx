import React from 'react';
import {usePagination} from '../../hooks/usePagination';

const Pagination = ({totalPosts, limitPosts, currentPage, changePage}) => {
    const numbersPages = usePagination(totalPosts, limitPosts);
    return (
        <div className="pages__wrapper">
            {numbersPages.map(p =>
                <button
                    className={p === currentPage ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                    key={p}
                >
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;