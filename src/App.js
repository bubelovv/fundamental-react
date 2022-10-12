import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./UI/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'HTML', text: 'I learn HTML'},
        {id: 2, title: 'CSS', text: 'I learn CSS'},
        {id: 3, title: 'JavaScript', text: 'I learn JavaScript'},
        {id: 4, title: 'React', text: 'I learn React'},
        {id: 5, title: 'Redux', text: 'I learn Redux'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            {posts.length === 0
                ? <h1 style={{textAlign: 'center'}}>Posts wasn't find</h1>
                : <PostList remove={removePost} title='My skills' posts={posts}/>
            }
        </div>
    );
}

export default App;
