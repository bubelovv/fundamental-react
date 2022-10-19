import React, {useState} from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addPost = (event) => {
        event.preventDefault();
        createPost({...post, id: Date.now()});
        setPost({title: '', body: ''});
    };

    return (
        <form>
            <MyInput
                placeholder='title of post'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput
                placeholder='body of post'
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addPost} disabled={!post.title || !post.body}>
                Change new post
            </MyButton>
        </form>
    );
};

export default PostForm;