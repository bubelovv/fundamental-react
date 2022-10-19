import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './UI/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/MyButton/MyButton';
import {useSearchedSortedPosts} from './hooks/usePosts';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'dd', text: 'bb'},
        {id: 2, title: 'ee', text: 'cc'},
        {id: 3, title: 'aa', text: 'dd'},
        {id: 4, title: 'bb', text: 'ee'},
        {id: 5, title: 'cc', text: 'aa'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const searchedSortedPosts = useSearchedSortedPosts(posts, filter.sort, filter.query);

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
