import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './UI/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/MyButton/MyButton';
import {useSearchedSortedPosts} from './hooks/usePosts';
import {PostService} from './API/PostService';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const searchedSortedPosts = useSearchedSortedPosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
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

            {searchedSortedPosts.length
                ? <PostList remove={removePost} title="My skills" posts={searchedSortedPosts}/>
                : <h1 style={{textAlign: 'center'}}>Posts wasn't find</h1>
            }
        </div>
    );
}

export default App;
