import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/MyButton/MyButton';
import Loader from './UI/Loader/Loader';
import {useSearchedSortedPosts} from './hooks/usePosts';
import {useFetching} from './hooks/useFetching';
import PostService from './API/PostService';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [firstLoading, setFirstLoading] = useState(true);
    const searchedSortedPosts = useSearchedSortedPosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        setFirstLoading(false);
        const posts = await PostService.getAll();
        setPosts(posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 20}}
                onClick={() => setModal(true)}>
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
            {firstLoading ? <Loader/> :
                isPostsLoading
                    ? <Loader/>
                    : <PostList remove={removePost} title="My skills" posts={searchedSortedPosts}/>
            }
        </div>
    );
}

export default App;
