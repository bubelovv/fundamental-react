import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])));
        }
        return posts;
    }, [sort, posts]);
};

export const useSearchedSortedPosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
};