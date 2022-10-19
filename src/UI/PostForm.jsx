import React, {useState} from 'react';
import MyInput from './MyInput/MyInput';
import MyButton from './MyButton/MyButton';

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', text: ''});

    const addPost = (event) => {
        event.preventDefault();
        createPost({...post, id: Date.now()});
        setPost({title: '', text: ''});
    };

    return (
        <form>
            <MyInput
                placeholder='title of post'
                value={post.title}
                type='text'
                onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput
                placeholder='text of post'
                value={post.text}
                type='text'
                onChange={e => setPost({...post, text: e.target.value})}/>
            <MyButton onClick={addPost} disabled={!post.title || !post.text}>
                Change new post
            </MyButton>
        </form>
    );
};

export default PostForm;