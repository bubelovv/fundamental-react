import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import {useNavigate} from 'react-router-dom';

const PostItem = ({post, remove}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">{post.id + '. ' + post.title}</strong>
                <div className="post__body">
                    {post.body}
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <MyButton style={{marginBottom: 5}} onClick={() => navigate('/posts/' + post.id)}>Open</MyButton>
                <button className="post__btn_delete" onClick={() => remove(post.id)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;