import {useMemo} from 'react';

export const usePagination = (totalPosts, limitPosts) => {
    return useMemo(() => {
        let total = Math.ceil(totalPosts / limitPosts);

        const numbersPages = [];
        for (let i = 0; i < total; i++) {
            numbersPages.push(i + 1);
        }
        return numbersPages;
    }, [totalPosts, limitPosts]);
};