import React from 'react';
import MyButton from '../UI/MyButton/MyButton';

const PostItem = ({post, number, remove}) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong className='post__title'>{post.id + '. ' + post.title}</strong>
                <div className='post__body'>
                    {post.body}
                </div>
            </div>
            <div>
                <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;