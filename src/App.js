import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./UI/PostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'dd', text: 'bb'},
        {id: '2', title: 'ee', text: 'cc'},
        {id: '3', title: 'aa', text: 'dd'},
        {id: '4', title: 'bb', text: 'ee'},
        {id: '5', title: 'cc', text: 'aa'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('work')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const searchedSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

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

            {searchedSortedPosts.length
                ? <PostList remove={removePost} title='My skills' posts={searchedSortedPosts}/>
                : <h1 style={{textAlign: 'center'}}>Posts wasn't find</h1>
            }
        </div>
    );
}

export default App;
