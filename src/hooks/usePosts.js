import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};

export const useSearchedSortedPosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const searchedSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);

    return searchedSortedPosts;
};