import React, {useEffect, useState} from 'react';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import {useSearchedSortedPosts} from '../hooks/usePosts';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Loader from '../UI/Loader/Loader';
import PostList from '../components/PostList';
import Pagination from '../UI/Pagination/Pagination';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [firstLoading, setFirstLoading] = useState(true);

    const [limitPosts, setLimitPosts] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, current) => {
        setTotalPosts(0);
        const response = await PostService.getAll(limit, current);
        setTotalPosts(response.headers['x-total-count']);
        setPosts(response.data);
    });
    const searchedSortedPosts = useSearchedSortedPosts(posts, filter.sort, filter.query);

    useEffect(() => {
        setFirstLoading(false);
        fetchPosts(limitPosts, currentPage);
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const changePage = (page) => {
        setCurrentPage(page);
        fetchPosts(limitPosts, page);
    };

    return (
        <div className="App">

            <MyButton
                style={{marginTop: 20}}
                onClick={() => setModal(true)}
            >
                Add new post
            </MyButton>

            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}/>

            {postsError && <h1 style={{textAlign: 'center'}}>{postsError}</h1>}
            <h1 style={{textAlign: 'center', margin: '0 0 20px'}}>
                My posts
            </h1>
            <Pagination
                limitPosts={limitPosts}
                totalPosts={totalPosts}
                currentPage={currentPage}
                changePage={changePage}
            />
            {firstLoading ? <Loader/> :
                isPostsLoading
                    ? <Loader/>
                    : <PostList remove={removePost} posts={searchedSortedPosts}/>
            }

            <Pagination
                limitPosts={limitPosts}
                totalPosts={totalPosts}
                currentPage={currentPage}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;