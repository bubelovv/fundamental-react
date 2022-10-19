import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/MyButton/MyButton';
import {useSearchedSortedPosts} from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './UI/Loader/Loader';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const searchedSortedPosts = useSearchedSortedPosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsPostsLoading(true);
        const posts = await PostService.getAll();
        setPosts(posts);
        setIsPostsLoading(false);
    };

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

            {isPostsLoading || !searchedSortedPosts.length
                ? <Loader/>
                : <PostList remove={removePost} title="My skills" posts={searchedSortedPosts}/>
            }
        </div>
    );
}

export default App;
