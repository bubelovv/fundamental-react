import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./UI/PostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: '5', text: '3'},
        {id: '2', title: '4', text: '4'},
        {id: '3', title: '3', text: '5'},
        {id: '4', title: '2', text: '1'},
        {id: '5', title: '1', text: '2'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    const getSortedPosts = useMemo(() => {
        console.log('work')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const onChange = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MyInput
                placeholder='search post...'
                value={searchQuery}
                type='text'
                onChange={e => setSearchQuery(e.target.value)}/>
            <MySelect
                value={selectedSort}
                onChange={onChange}
                defaultValue='sort by...'
                options={[
                    {value: 'id', name: 'sort by id'},
                    {value: 'title', name: 'sort by title'},
                    {value: 'text', name: 'sort by text'},
                ]}/>

            {posts.length
                ? <PostList remove={removePost} title='My skills' posts={getSortedPosts}/>
                : <h1 style={{textAlign: 'center'}}>Posts wasn't find</h1>
            }
        </div>
    );
}

export default App;
