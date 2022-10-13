import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./UI/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'dd', text: 'bb'},
        {id: 2, title: 'ee', text: 'cc'},
        {id: 3, title: 'aa', text: 'dd'},
        {id: 4, title: 'bb', text: 'ee'},
        {id: 5, title: 'cc', text: 'aa'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            console.log(filter.sort)
            return [...posts].sort((a, b) => String(a[filter.sort]).localeCompare(String(b[filter.sort])))
        }
        return posts
    }, [filter.sort, posts])

    const searchedSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: '15px 0'}}/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}/>

            {searchedSortedPosts.length
                ? <PostList remove={removePost} title='My skills' posts={searchedSortedPosts}/>
                : <h1 style={{textAlign: 'center'}}>Posts wasn't find</h1>
            }
        </div>
    );
}

export default App;
