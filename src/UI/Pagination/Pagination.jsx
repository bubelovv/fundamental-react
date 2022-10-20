import React from 'react';

const Pagination = ({numbersPages, currentPage, changePage}) => {
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